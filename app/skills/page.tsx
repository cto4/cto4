import { Icon } from "@iconify/react";
import { Card, Group, Stack, Text, Title } from "@mantine/core";

import classes from "./styles.module.scss";
import mkMetaData from "#/lib/utils/mkMetaData";
import banner from "#a/images/banners/skills.svg";
import skills from "./skills.json";

export const metadata = mkMetaData({
  title: "Skills | Hima Pro",
  description: "Here you can see my skills and the software I use usually.",
  images: [{ url: banner.src }],
});

const page = () => {
  return (
    <>
      <Title component={Group} order={1} my={0}>
        <Icon icon="eos-icons:atom-electron" />
        My Skills
      </Title>
      <Text c="dimmed" size="lg">
        Here you can see my skills and the software I use usually.
      </Text>
      <div className={classes.skillsContainer}>
        <div className={classes.skillsBox}>
          {skills.map(async (skill, index) => (
            <Card component={Stack} align="center" gap={5} p="xl" withBorder shadow="sm" key={index}>
              <Icon width={80} height={80} icon={skill.icon} />
              <Title order={4} ta="center">
                {skill.name}
              </Title>
              <Text c="dimmed" ta="center" size="sm" visibleFrom="xs">
                {skill.description}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
