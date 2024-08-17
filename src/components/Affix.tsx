"use client";
import { useEffect, useState } from "react";
import { Affix as MAffix, Button, Transition } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Icon } from "@iconify/react";

const Affix = () => {
  const [target, setTarget] = useState(null);
  const matches = useMediaQuery("(min-width: 767px)");
  const totalHeight = target?.scrollHeight - target?.clientHeight;
  const progress = Math.ceil((target?.scrollTop / totalHeight) * 100);

  useEffect(() => {
    const handleScroll = (e: any) => setTarget(e?.target.scrollingElement as any);
    globalThis?.addEventListener("scroll", handleScroll);
    return () => globalThis?.removeEventListener("scroll", handleScroll);
  }, []);

  const blur = {
    background: "color-mix(in srgb, var(--mantine-color-default), transparent 50%)",
    backdropFilter: "blur(10px)",
  };

  const scrollActions = {
    up: () => target?.scrollTo({ top: 0, behavior: "smooth" }),
    down: () => target?.scrollTo({ top: totalHeight, behavior: "smooth" }),
  };

  return (
    <>
      <MAffix position={{ bottom: 20, right: matches ? "20px" : "calc(50% - 85px)" }}>
        <Transition transition="slide-up" mounted={progress > 0}>
          {(transitionStyles) => (
            <Button.Group style={transitionStyles} orientation={matches ? "vertical" : "horizontal"}>
              <Button variant="default" style={blur} onClick={scrollActions.up}>
                <Icon icon="tabler:arrow-bar-to-up" />
              </Button>
              <Button variant="default" style={blur}>
                {progress > 100 ? 100 : progress} %
              </Button>
              <Button variant="default" style={blur} onClick={scrollActions.down}>
                <Icon icon="tabler:arrow-bar-to-down" />
              </Button>
            </Button.Group>
          )}
        </Transition>
      </MAffix>
    </>
  );
};

export default Affix;
