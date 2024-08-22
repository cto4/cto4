import Link from "next/link";
import { Button, Flex, Group, Stack, Text, Title } from "@mantine/core";

import ScreenBox from "#c/ScreenBox";
import BackBtn from "#c/BackBtn";
import mkMetaData from "#/lib/utils/mkMetaData";

export const metadata = mkMetaData({
  title: "Not Found | Next App",
  description: "Sorry, we couldn't find the page you're looking for."
});

const NotFound = () => {
  return (
    <ScreenBox component={Flex} align="center" justify="center">
      <Stack gap={10} ta="center">
        <Title c="yellow" order={6}>
          404
        </Title>
        <Title order={2} my={0}>
          Not Found
        </Title>
        <Text c="dimmed">Sorry, we couldn't find the page you're looking for.</Text>
        <Group justify="center">
          <Button w={100} component={Link} href="/">
            Go Home
          </Button>
          <BackBtn w={100} />
        </Group>
      </Stack>
    </ScreenBox>
  );
};

export default NotFound;
