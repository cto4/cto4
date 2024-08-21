"use client";
import Link from "next/link";
import { Card, Flex, Title, Divider, NavLink, Text, SimpleGrid } from "@mantine/core";
import { Icon } from "@iconify/react";

import pages from "#a/res/pages.json";
import { useMediaQuery } from "@mantine/hooks";

const EmptyBox = ({ className = null, title = "Empty !", description = "Sorry we didn't posts yet." }) => {
  const match = useMediaQuery("(max-width: 767px)");

  return (
    <Card withBorder shadow="sm" mb={20}>
      <Flex className={className} justify="center" align={match ? "start" : "center"} h={match ? "auto" : 400}>
        <div>
          <Title order={2}>{title}</Title>
          <Text c="dimmed">{description} Please visit the other pages no learn more about us.</Text>
          <Divider my={20} />
          <SimpleGrid cols={2}>
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
          </SimpleGrid>
        </div>
      </Flex>
    </Card>
  );
};

export default EmptyBox;
