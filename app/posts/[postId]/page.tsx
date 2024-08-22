import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Card,
  CardSection,
  Group,
  Image,
  Stack,
  Title,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

import pb from "#/lib/db";
import Comments from "#c/Comments";
import EmptyBox from "#c/EmptyBox";

export const revalidate = 0;

export async function getPost(postId: string) {
  return await new Promise<any>(async (resolve) => {
    try {
      resolve(
        await pb.collection("posts").getOne(postId, {
          requestKey: crypto.randomUUID(),
          expand: "author",
        })
      );
    } catch (error) {
      resolve({ error, ok: false });
    }
  });
}

export async function generateMetadata({ params }, parent: ResolvingMetadata): Promise<Metadata> {
  const post = await getPost(params.postId);
  const banner = process.env.POCKETBASE + `/api/files/posts/${post.id}/${post.banner}?thumb=0x200f`;
  return {
    title: (post.title ?? "Post not Found") + " | Hima Pro",
    description: post.title ?? "We can not get requested post. Please visit the other pages to learn more about us.",
    openGraph: {
      ...(await parent).openGraph,
      title: (post.title ?? "Post not Found") + " | Hima Pro",
      description: post.title ?? "We can not get requested post. Please visit the other pages to learn more about us.",
      images: [{ url: banner }],
    },
  };
}

const page = async ({ params }) => {
  const post = await getPost(params.postId);
  if (post?.ok == false) {
    return <EmptyBox title="Post not Found !" description="Can not get requested post." />;
  }

  const author = post.expand.author;
  const banner = process.env.POCKETBASE + `/api/files/posts/${post.id}/${post.banner}?thumb=0x200f`;
  const avatar = process.env.POCKETBASE + `/api/files/users/${author.id}/${author.avatar}?thumb=0x50f`;
  if (post.draft) {
    return (
      <EmptyBox
        title="Post is not avilable !"
        description="We can not view this post now, maybe drafted or moved to another url."
      />
    );
  }
  return (
    <>
      <Card withBorder shadow="sm" radius={10} mb={20}>
        <CardSection p={20}>
          <Image radius="lg" alt={post.title} src={banner} />
        </CardSection>
        <Box px={10}>
          <Stack gap={5}>
            <Group>
              <Text>{post.updated.split(" ")[0]}</Text>
              {post.tags?.map((tag: string, index: number) => (
                <Badge c="#1a1a1a" key={index} m={0}>
                  {tag}
                </Badge>
              ))}
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
      </Card>
      <Card component={TypographyStylesProvider} withBorder shadow="sm" radius={10}>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </Card>
      <Card withBorder shadow="sm" radius={10} mt={20} bg="#ffffff">
        <Comments postId={params?.postId} title={post.title} />
      </Card>
    </>
  );
};

export default page;
