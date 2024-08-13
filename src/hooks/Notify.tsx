"use client";
import { ReactNode } from "react";
import { notifications } from "@mantine/notifications";
import { DefaultMantineColor, ThemeIcon } from "@mantine/core";
import { Icon, IconifyIcon } from "@iconify/react";

interface NotifyProps {
  title: ReactNode;
  message: ReactNode;
  color: DefaultMantineColor;
  icon: string | IconifyIcon;
}

const Notify = ({ title, message, color = null, icon }: NotifyProps) => {
  notifications.show({
    title,
    message,
    withBorder: true,
    autoClose: true,
    color,
    icon: icon ? (
      <ThemeIcon color={color} size="35px">
        <Icon style={{ width: "70%", height: "70%" }} icon={icon} />
      </ThemeIcon>
    ) : null,
  });
};

export default Notify;
