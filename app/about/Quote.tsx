"use client";
import { useState } from "react";
import { Blockquote, Stack, Title, Text, Badge, Anchor, Group } from "@mantine/core";
import { Icon } from "@iconify/react";

import classes from "./styles.module.scss";

const Quote = () => {
  const [expanded, setExpanded] = useState(false);

  const hint = (
    <Stack>
      <Group gap={5}>
        <Text>
          -- Formerly{" "}
          <Anchor underline="never" target="_blank" href="https://github.com/Hima-Pro">
            @hima-pro
          </Anchor>
        </Text>
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
      <Badge className={classes.pointer} onClick={() => setExpanded(!expanded)} variant="outline">
        {expanded ? "Summarize details" : "Expand details"}
      </Badge>
    </Stack>
  );

  const icon = <Icon width={25} icon="tabler:info-circle" />;
  return (
    <Blockquote className={classes.quote} color="yellow" cite={hint} icon={icon} mt="xl" p={20}>
      <Stack ta="justify" gap={5}>
        <Title order={2}>About Me :</Title>
        {expanded ? (
          <>
            <Text>
              Hi, I'm Ibrahim M. A. Megahed, a multi-passion persion with medicne knowledge and software developing
              innovative skills. I've been in the tech industry since 2019, working on a wide range of projects from web
              applications, servers and back-end software. I speak Arabic as a native speaker, English and Russian. I'm
              a medical student at The Egyption Assiut National University.
            </Text>
            <Text>
              With a self-taught foundation in [programming languages, frameworks, and technologies], I've honed my
              skills to deliver high-quality code that meets the needs of real-world applications.
            </Text>
            <Text>
              I usualy build software for my self, frinds even for my education. When i'm not coding, you may find me learning
              medcine as a student-doctor, exploring open-source projects. I always eager to collaborate with
              like-minded individuals who share my passion for tech and innovation.
            </Text>
            <Text>
              Feel free to reach out if you'd like to chat about a project idea, get feedback on my/your code, or simply
              grab a coffee and lets discuss the latest tech trends!
            </Text>
          </>
        ) : (
          <>
            <Text>
              Hi, I'm Ibrahim M. A. Megahed, a multi-passion person with medicine knowledge and software developing
              innovative skills. I've been in the tech industry since 2019, working on web applications, servers, and
              back-end software. I speak Arabic as a native speaker, English and Russian, and I'm a medical student at
              The Egyption Assiut National University. I build software for myself, friends, even for my education, when I'm not
              learning medicine, I always eager to collaborate with like-minded individuals who share my passion for
              tech and innovation. Feel free to reach out if you'd like to chat about a project idea or get feedback on
              my/your code, or simply grab a coffee and lets discuss the latest tech trends!
            </Text>
          </>
        )}
      </Stack>
    </Blockquote>
  );
};

export default Quote;
