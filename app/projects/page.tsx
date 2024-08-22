import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Title, Group, Text, Box, Card, Flex, Divider, NavLink, Button, LoadingOverlay } from "@mantine/core";
import { Icon } from "@iconify/react";

import classes from "./styles.module.scss";
import GithubAPI from "#/lib/actions/GithubAPI";
import mkMetaData from "#/lib/utils/mkMetaData";
import Controls from "#c/Controls";
import EmptyBox from "#c/EmptyBox";

export const metadata = mkMetaData({
  title: "Projects | Hima Pro",
  description: "Here are some of my projects that I have worked on.",
});

export const revalidate = 0;

const page = async ({ searchParams }) => {
  const page = parseInt(searchParams.page ?? 1);
  const sort = ["updated", "created", "pushed", "full_name"].includes(searchParams.sort)
    ? searchParams.sort
    : "updated";
  const api = await GithubAPI({
    username: process.env.GH_USER ?? "Hima-Pro",
    per_page: parseInt(process.env.PROJECTS_PER_PAGE ?? "10"),
    page,
    sort,
  });

  if ((page > api?.pagination.total || page < 1) && api?.pagination.total != 0) {
    redirect("/projects");
  }

  return (
    <>
      <Title component={Group} order={1} my={0}>
        <Icon icon="solar:sidebar-code-line-duotone" />
        My Projects
      </Title>
      <Text c="dimmed" size="lg" mb={16}>
        Here are some of my projects that I have worked on.
      </Text>
      <Controls
        total={api.pagination.total}
        page={api.pagination.page}
        sort={sort}
        sorts={[
          { value: "updated", label: "Updated" },
          { value: "created", label: "Created" },
          { value: "pushed", label: "Pushed" },
          { value: "full_name", label: "Full Name" },
        ]}
      />
      {api?.repos.length == 0 && <EmptyBox description="No porojects to show now !" />}
      <Box className={classes.projectsContainer}>
        <Box className={classes.projects} pos="relative" m={0}>
          <Suspense fallback={<LoadingOverlay h={400} visible={true} />}>
            {api?.repos.map((repo, index) => (
              <Card className={classes.project} withBorder shadow="sm" key={index}>
                <Flex justify="space-between" align="end" mb={5}>
                  <Title order={3}>
                    {repo.owner} / {repo.name}
                  </Title>
                  <Button
                    variant="light"
                    radius="sm"
                    fz={16}
                    h={30}
                    leftSection={<Icon height={20} icon="fa:star-o" />}
                  >
                    {repo.stars}
                  </Button>
                </Flex>
                {repo.description && (
                  <Text c="dimmed" mb={5} ta="justify">
                    {repo.description}
                  </Text>
                )}
                {repo.topics && (
                  <Group gap={10} mb={10}>
                    {repo.topics.map((topic, index) => (
                      <Button key={index} variant="outline" radius="sm" fz={16} h={30}>
                        # {topic}
                      </Button>
                    ))}
                  </Group>
                )}
                <Divider mb={10} />
                <Group grow>
                  <NavLink target="_blank" ta="center" variant="filled" active label="Source Code" href={repo.url} />
                  {repo.homepage ? (
                    <NavLink
                      target="_blank"
                      ta="center"
                      variant="filled"
                      active
                      label="Home Page"
                      href={repo.homepage}
                    />
                  ) : null}
                </Group>
              </Card>
            ))}
          </Suspense>
        </Box>
      </Box>
    </>
  );
};

export default page;
