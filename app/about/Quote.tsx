"use client";
import { useState } from "react";
import { Blockquote, Stack, Title, Text, Badge, Anchor, Group } from "@mantine/core";
import { Icon } from "@iconify/react";

import classes from "./styles.module.scss";

const Quote = () => {
  const [expanded, setExpanded] = useState(false);

  const hint = (
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
  );

  const icon = <Icon width={25} icon="tabler:info-circle" />;
  return (
    <Blockquote className={classes.quote} color="yellow" cite={hint} icon={icon} mt="xl">
      <Stack>
        <Title order={2}>About Me :</Title>
        {expanded ? (
          <>
            <Text>
              Hi, I'm Ibrahim M. A. Megahed, a multi-passion persion with medicne knowledge and software developing
              innovative skills. I've been in the tech industry since 2018, working on a wide range of projects from web
              applications, servers and back-end software. I speak English, Russian and Arabic as a native speaker, I'm a
              medical student at The Egyption Assiut National University.
            </Text>
            <Text>
              With a self-taught foundation in [programming languages, frameworks, or technologies], I've honed my skills
              to deliver high-quality code that meets the needs of real-world applications.
            </Text>
            <Text>
              I usualy build software for my self, frinds or education. When i'm not coding, you can find me learning
              medcine as a student-doctor, exploring open-source projects. I'm always eager to collaborate with like-minded
              individuals who share my passion for tech and innovation.
            </Text>
            <Text>
              Feel free to reach out if you'd like to chat about a project idea, get feedback on my/your code, or simply
              grab a coffee and discuss the latest tech trends!
            </Text>
          </>
        ) : (
          <>
            <Text>
              I'm Ibrahim M. A. Megahed, a multi-passion person with medicine knowledge and software developing innovative
              skills. I've been in the tech industry since 2018, working on web applications, servers, and back-end
              software. I speak English, Russian, and Arabic as a native speaker, and I'm a medical student at The Egyption
              Assiut National University. I build software for myself, friends, or education, when I'm not learning
              medicine. I'm always eager to collaborate with like-minded individuals who share my passion for tech and
              innovation. Feel free to reach out if you'd like to chat about a project idea or get feedback on my/your
              code, or simply grab a coffee and discuss the latest tech trends!
            </Text>
          </>
        )}
        <Badge className={classes.pointer} onClick={() => setExpanded(!expanded)} variant="outline">
          {expanded ? "Summarize details" : "Expand details"}
        </Badge>
      </Stack>
    </Blockquote>
  );
};

export default Quote;
