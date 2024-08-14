"use client";
import { ActionIcon, AppShell, Container, Flex, Group, rem, Text } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { Icon } from "@iconify/react";
import NavBar from "./NavBar";
import Affix from "./Affix";
import ThemeSwitcher from "./ThemeSwitcher";
import Cookies from "universal-cookie";
import { useEffect } from "react";

const LayoutX = ({ children, wideOpen }: { children: React.ReactNode; wideOpen?: string }) => {
  const Co = new Cookies();
  const pinned = useHeadroom({ fixedAt: 120 });
  const [mOpened, mHandlers] = useDisclosure();
  const [wOpened, wHandlers] = useDisclosure(wideOpen !== "false");

  useEffect(() => Co.set("wide-open", wOpened), [wOpened]);

  const shellProps = {
    header: { height: 70, collapsed: !pinned, offset: true },
    navbar: { width: 300, breakpoint: "sm", collapsed: { desktop: !wOpened, mobile: !mOpened } },
    aside: {
      width: 300,
      breakpoint: "md",
      collapsed: { desktop: true, mobile: true },
    },
  };

  const mMenu = (
    <ActionIcon onClick={mHandlers.toggle} variant="subtle" color="gray" size="lg" hiddenFrom="sm">
      <Icon height={25} icon={"mdi:menu-" + (mOpened ? "open" : "close")} />
    </ActionIcon>
  );

  const wMenu = (
    <ActionIcon onClick={wHandlers.toggle} variant="subtle" color="gray" size="lg" visibleFrom="sm">
      <Icon height={25} icon={"mdi:menu-" + (wOpened ? "open" : "close")} />
    </ActionIcon>
  );

  const blur = {
    background: "color-mix(in srgb, var(--mantine-color-default), transparent 50%)",
    backdropFilter: "blur(10px)",
  };

  return (
    <AppShell layout="alt" padding="md" {...shellProps}>
      <AppShell.Header>
        <Container h="100%" style={{ width: "100%", maxWidth: "1000px" }}>
          <Group h="100%" justify="space-between" gap={10}>
            <Flex h="100%" align="center" gap={10}>
              {wMenu}
              {mMenu}
              <Text size="20px">Hima Pro</Text>
            </Flex>
            <ThemeSwitcher />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Navbar style={blur} px="md">
        <NavBar menu={mMenu} close={mHandlers.close} />
      </AppShell.Navbar>
      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        <Container style={{ width: "100%", maxWidth: "1000px" }}>{children}</Container>
        <Affix />
      </AppShell.Main>
    </AppShell>
  );
};

export default LayoutX;
