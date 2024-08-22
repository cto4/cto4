import Link from "next/link";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Anchor, Avatar, Badge, Group, Image, Stack, Text, Title, Box, LoadingOverlay } from "@mantine/core";

import pb from "#/lib/db";
import classes from "./styles.module.scss";
import mkMetaData from "#/lib/utils/mkMetaData";
import { CommentsCount } from "#c/Comments";
import Controls from "#c/Controls";
import EmptyBox from "#c/EmptyBox";

export const metadata = mkMetaData({
  title: "Blog | Hima Pro",
  description: "Explore the latest ideas, insights, and innovations on my website.",
});

export const revalidate = 0;

var page = async ({ searchParams }) => {
  const page = parseInt(searchParams.page ?? 1);
  const sort = ["updated", "title"].includes(searchParams.sort) ? searchParams.sort : "updated";
  const posts = await pb.collection("posts").getList(page, parseInt(process.env.POSTS_PER_PAGE ?? "10"), {
    filter: "draft = false",
    fields: "id,banner,title,tags,expand,updated",
    sort: sort == "updated" ? "-updated" : sort,
    expand: "author",
  });

  if ((page > posts.totalPages || page < 1) && posts.totalPages != 0) {
    redirect("/");
  }

  return (
    <>
      <Box className={classes.postsContainer}>
        <Controls
          sort={sort}
          page={posts.page}
          total={posts.totalPages}
          sorts={[
            { value: "updated", label: "Updated" },
            { value: "title", label: "Title" },
          ]}
        />
        {posts?.items.length == 0 && <EmptyBox className={classes.empty} />}
        <Box className={classes.posts} pos="relative">
          <Suspense fallback={<LoadingOverlay h={400} visible />}>
            {posts?.items.map((post, index) => {
              const author = post.expand.author;
              const banner = process.env.POCKETBASE + `/api/files/posts/${post.id}/${post.banner}?thumb=0x200f`;
              const avatar = process.env.POCKETBASE + `/api/files/users/${author.id}/${author.avatar}?thumb=0x50f`;
              return (
                <Box className={classes.post} key={index}>
                  <Anchor component={Link} href={`/posts/${post.id}`} mb={10} underline="never">
                    <Image radius="lg" alt={post.title} className={classes.banner} src={banner} />
                  </Anchor>
                  <Stack gap={5} mt={10}>
                    <Group gap={10}>
                      <Text>{post.updated.split(" ")[0]}</Text>
                      {post.tags?.map((tag: string, index: number) => (
                        <Badge c="#1a1a1a" key={index} m={0}>
                          {tag}
                        </Badge>
                      ))}
                      <Badge c="#1a1a1a" m={0}>
                        <CommentsCount postId={post.id} title={post.title} />
                      </Badge>
                    </Group>
                    <Title order={3} size="md">
                      {post.title}
                    </Title>
                    <Anchor component={Link} href="/about" underline="never">
                      <Group m={0} align="start">
                        <Avatar size={45} alt={author.name} src={avatar} />
                        <Stack gap={0}>
                          <Text size="md">{author.name}</Text>
                          <Text c="#b0b0b0" size="sm">
                            {author.username}
                          </Text>
                        </Stack>
                      </Group>
                    </Anchor>
                  </Stack>
                </Box>
              );
            })}
          </Suspense>
        </Box>
      </Box>
    </>
  );
};

export default page;
