"use client";
import { Icon } from "@iconify/react";
import { Blockquote, Stack, Title, Text, Badge, Anchor, Group } from "@mantine/core";
import Link from "next/link";

import classes from "./styles.module.scss";

const Quote = () => {
  const hint = (
    <Group gap={5}>
      <Text>-- Formerly</Text>
      <Anchor component={Link} underline="never" href="#">
        @hima-pro
      </Anchor>
      <Text>
        & Founder of{" "}
        <Anchor underline="never" target="_blank" href="https://github.com/o-studio">
          @o-studio
        </Anchor>
      </Text>
      <Text>
        | {">>"}{" "}
        <Anchor underline="never" target="_blank" href="https://palestinecampaign.org">
          Free Palestine <img src="https://flagcdn.com/ps.svg" width="25" alt="Palestine" />
        </Anchor>
      </Text>
    </Group>
  );

  const icon = <Icon width={25} icon="tabler:info-circle" />;
  return (
    <Blockquote className={classes.quote} color="yellow" cite={hint} icon={icon} mt="xl" p={20}>
      <Stack ta="justify" gap={5}>
        <Title order={2}>About Me :</Title>
        <Text>
          I'm Ibrahim Mohamed Abdelsalam Megahed, a multi-passionate individual with software development skills. I've
          been in the technology industry since 2019. I provide full-stack web apps, servers, and back-end services.
          With a self-taught background in programming languages, frameworks, and technologies, I've honed my ability to
          produce high-quality code that fits the requirements of real-world applications. As a native Arabic speaker, I
          can also communicate in English and Russian. I am a Computer Science student at{" "}
          <Anchor href="https://aou.edu.eg" target="_blank">
            Arab Open University
          </Anchor>
          . I am always happy to engage with like-minded individuals who share my enthusiasm for technology. I would
          like to continue my career by working on open-source projects and SaaS solutions. My hobby is to continually
          learn new things. Feel free to reach out if you would like to chat about a project idea, get feedback on my or
          your code, or simply grab a cup of coffee and let's discuss the latest tech trends.
        </Text>
      </Stack>
    </Blockquote>
  );
};

export default Quote;
