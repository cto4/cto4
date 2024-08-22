import {
  ActionIcon,
  Anchor,
  Badge,
  Card,
  Text,
  CardSection,
  Flex,
  Group,
  Image,
  NavLink,
  Title,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import { Icon } from "@iconify/react";

import me from "#a/images/me.webp";
import AboutLinks from "./about.json";
import socials from "#a/res/socials.json";
import classes from "./styles.module.scss";
import mkMetaData from "#/lib/utils/mkMetaData";
import CanvasBG from "#c/CanvasBG";
import Quote from "./Quote";

export const metadata = mkMetaData({
  title: "About | Hima Pro",
  description: "Learn about the passion behind us and how we empower our community.",
  images: [{ url: me.src }],
});

const interests = [
  "Learn English",
  "Swimming",
  "Studying",
  "Learn to code",
  "Learn Russian",
  "Learn Arabic",
  "Learn Frinch",
];

const page = () => {
  const aboutSocials = socials.filter((link) => ["Facebook", "Twitter (X)", "Telegram"].includes(link.label));

  return (
    <>
      <Card withBorder shadow="sm">
        <CardSection>
          <CanvasBG className={classes.banner} geometry={[1185, 420]} spacing={5} />
        </CardSection>
        <div className={classes.user}>
          <Image src={me.src} alt="Me" />
          <Stack className={classes.info}>
            <Title order={1}>Ibrahim Megahed</Title>
            <Flex>
              <NavLink
                active
                label="Contact"
                href="/contact"
                variant="filled"
                visibleFrom="sm"
                component={Link}
                className={classes.mainLink}
                leftSection={<Icon height="25px" icon="ph:envelope-simple-duotone" />}
              />
              <Anchor href="/contact" component={Link} title="Contact me" m="0 5px 0 0" hiddenFrom="sm">
                <ActionIcon size="40px" variant="default">
                  <Icon height="25px" icon="ph:envelope-simple-duotone" />
                </ActionIcon>
              </Anchor>
              {aboutSocials.map((social, index) => (
                <Anchor href={social.href} title={social.label} key={index} style={{ margin: "0 5px" }} target="_blank">
                  <ActionIcon size="40px" variant="default">
                    <Icon height="25px" icon={social.icon} />
                  </ActionIcon>
                </Anchor>
              ))}
            </Flex>
          </Stack>
        </div>
      </Card>
      <Quote />
      <Card withBorder shadow="sm" mt={20}>
        <Group gap="10px">
          <Icon icon="tabler:star-filled" />
          {interests.map((skill) => (
            <Badge size="lg" key={skill} radius="sm">
              {skill}
            </Badge>
          ))}
        </Group>
      </Card>
      <div className={classes.aboutLinks}>
        {AboutLinks.map((link, index) => (
          <Anchor href={link.href} target="_blank" key={index} aria-label={link.title} title={link.title}>
            <Card component={Stack} gap={5} p={20} withBorder shadow="sm" ta="center">
              <Icon width={80} height={80} style={{ margin: "0 auto" }} icon={link.icon} />
              <Title order={3} ta="center">
                {link.label}
              </Title>
              <Text c="dimmed" fz="sm" ta="center">
                {link.desc}
              </Text>
            </Card>
          </Anchor>
        ))}
      </div>
    </>
  );
};

export default page;
