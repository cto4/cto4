import Link from "next/link";
import { redirect } from "next/navigation";
import { Anchor, Avatar, Badge, Flex, Card, Group, Image, Stack, Text, Title, Divider, NavLink } from "@mantine/core";
import { Icon } from "@iconify/react";

import pb from "#/lib/db";
import classes from "./styles.module.scss";
import pages from "#a/res/pages.json";
import Controls from "./Controls";

export const metadata = {
  title: "Home | Hima Pro",
};

export const revalidate = 0;

var page = async ({ searchParams }) => {
  const page = parseInt(searchParams.page ?? 1);
  const sort = ["updated", "title"].includes(searchParams.sort) ? searchParams.sort : "updated";
  const posts = await pb.collection("posts").getList(page, parseInt(process.env.PP ?? "10"), {
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
      <Controls sort={sort} pb={posts} />
      {posts?.items.length == 0 && (
        <Card withBorder shadow="sm">
          <Flex className={classes.empty} justify="center" align="center" h={400}>
            <div>
              <Title order={2}>Empty !</Title>
              <Text c="dimmed">Sorry we didn't posts yet. Please visit the other pages no learn more about us.</Text>
              <Divider my={20} />
              <div className={classes.pages}>
                {pages.map(
                  (page, index) =>
                    page.label !== "Home" && (
                      <NavLink
                        active
                        key={index}
                        variant="light"
                        component={Link}
                        label={page.label}
                        href={page.href}
                        leftSection={<Icon height={25} icon={page.icon} />}
                      />
                    )
                )}
              </div>
            </div>
          </Flex>
        </Card>
      )}
      <div className={classes.posts}>
        {posts?.items.map((post, index) => {
          const author = post.expand.author;
          const banner = process.env.PB + `/api/files/posts/${post.id}/${post.banner}?thumb=0x200f`;
          const avatar = process.env.PB + `/api/files/users/${author.id}/${author.avatar}?thumb=200x200f`;
          return (
            <Flex gap={20} direction="column" className={classes.post} key={index}>
              <Anchor component={Link} href={`/posts/${post.id}`} mb={10} underline="never">
                <Image radius="lg" className={classes.banner} src={banner} />
              </Anchor>
              <Stack gap={5}>
                <Group>
                  <Text>{post.updated.split(" ")[0]}</Text>
                  {post.tags?.map((tag: string, index: number) => (
                    <Badge key={index} m={0}>
                      {tag}
                    </Badge>
                  ))}
                </Group>
                <Anchor component={Link} href={`/posts/${post.id}`} mb={10} underline="never">
                  <Title order={3} size="md">
                    {post.title}
                  </Title>
                </Anchor>
                <Anchor component={Link} href={`/users/${author.username}`} underline="never">
                  <Group m={0} align="start">
                    <Avatar size={45} src={avatar} />
                    <Stack gap={0}>
                      <Text size="md">{author.name}</Text>
                      <Text c="dimmed" size="sm">
                        {author.username}
                      </Text>
                    </Stack>
                  </Group>
                </Anchor>
              </Stack>
            </Flex>
          );
        })}
      </div>
    </>
  );
};

export default page;
