"use client";
import dynamic from "next/dynamic";
import { Icon, IconifyIcon } from "@iconify/react";
import { ActionIcon, SegmentedControl, Stack, Text, useMantineColorScheme } from "@mantine/core";
import Cookies from "universal-cookie";

type ThemeSwitcherProps = {
  wide?: boolean;
  fullWidth?: boolean;
  noLabel?: boolean;
};

const ThemeSwitcher = ({ wide, fullWidth, noLabel }: ThemeSwitcherProps) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const Co = new Cookies();

  const segment = (icon: string | IconifyIcon, title: string) => ({
    icon,
    value: title.toLowerCase(),
    label: (
      <Stack align="center" gap={5}>
        <Icon height={20} icon={icon} />
        {noLabel ? <></> : <Text h={20}>{title}</Text>}
      </Stack>
    ),
  });

  const schemes = [
    segment("codicon:color-mode", "Auto"),
    segment("iconoir:half-moon", "Dark"),
    segment("iconamoon:mode-light", "Light"),
  ];

  const scheme = schemes.find((item) => item.value == colorScheme);
  const index = schemes.indexOf(scheme);

  return wide ? (
    <SegmentedControl
      size="md"
      fullWidth={fullWidth}
      data={schemes}
      value={colorScheme}
      onChange={(newScheme: any) => {
        Co.set("color-scheme", newScheme);
        setColorScheme(newScheme);
      }}
    />
  ) : (
    <ActionIcon
      size="lg"
      color="gray"
      variant="subtle"
      onClick={() => {
        const newScheme: any = schemes[(index + 1) % 3];
        Co.set("color-scheme", newScheme.value);
        setColorScheme(newScheme.value);
      }}
    >
      <Icon height={20} icon={scheme.icon} />
    </ActionIcon>
  );
};

export default dynamic(() => Promise.resolve(ThemeSwitcher), { ssr: false });
