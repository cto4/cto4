"use server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GH_TOKEN });

type GithubAPIProps = {
  username: string;
  per_page?: number;
  page?: number;
  sort?: "updated" | "created" | "pushed" | "full_name";
};

type Result = {
  repos: {
    name: string;
    description: string;
    owner: string;
    stars: number;
    updated: string;
    url: string;
    homepage: string;
    topics: string[];
  }[];
  pagination: { page: number; total: number };
};

async function GithubAPI({ username, per_page = 10, page = 1, sort = "updated" }: GithubAPIProps) {
  return new Promise<Result>(async (resolve, reject) => {
    try {
      const { data } = await octokit.request("GET /users/{username}/repos", {
        username,
        per_page,
        page,
        sort,
      });

      const repos = data.map((repo) => {
        const { owner, name, description, topics, homepage } = repo;
        return {
          name,
          description,
          owner: owner.login,
          stars: repo.stargazers_count,
          updated: repo.updated_at,
          url: repo.html_url,
          homepage,
          topics,
        };
      });

      const user = await octokit.request("GET /users/{username}", { username });

      resolve({
        repos,
        pagination: { page, total: parseInt((user.data.public_repos / per_page).toFixed(0)) },
      });
    } catch (error) {
      reject(error);
    }
  });
}

const makeLangs = (origianl: { [s: string]: number }) => {
  const langs = [];
  const names = Object.keys(origianl);
  const total = Object.values<number>(origianl).reduce((a: number, b: number) => a + b, 0);
  const other = { name: "Other", value: 0 };

  names.forEach((name) => {
    if ((origianl[name] * 100) / total < 1) {
      other.value += Math.round((origianl[name] * 100) / total);
    } else {
      langs.push({ name, value: Math.round((origianl[name] * 100) / total) });
    }
    other.value > 0 && langs.filter((lang) => lang.name == "Other").length < 1 ? langs.push(other) : null;
  });

  return langs;
};

export default GithubAPI;
