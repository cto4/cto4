"use client";
import { Icon } from "@iconify/react";
import { ActionIcon, ActionIconGroup, Divider, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ThemeSwitcher from "./ThemeSwitcher";
import socials from "#a/res/socials.json";
import logo from "#a/images/logo.svg";

const Footer = () => {
  const match = useMediaQuery("(max-width: 767px)");
  const aboutSocials = socials.filter((link) => ["Facebook", "Twitter (X)", "Telegram"].includes(link.label));
  return (
    <Stack mt={20} mb={60}>
      <Divider />
      <Flex align="center" justify="space-between">
        <Group>
          <Image h={40} src={logo.src} visibleFrom="sm" />
          <Title order={3} fz={30} >Hima Pro</Title>
        </Group>
        <ActionIconGroup>
          {aboutSocials.map((social, index) => (
            <ActionIcon
              size="40px"
              key={index}
              component="a"
              target="_blank"
              title={social.label}
              href={social.href}
              variant="default"
            >
              <Icon height="25px" icon={social.icon} />
            </ActionIcon>
          ))}
        </ActionIconGroup>
      </Flex>
      <Divider />
      <Flex align="center" justify="space-between">
        <Text>Copyright &copy; 2018 - {new Date().getFullYear()} Hima-Pro.</Text>
        <ThemeSwitcher wide={!match} noLabel />
      </Flex>
    </Stack>
  );
};

export default Footer;
