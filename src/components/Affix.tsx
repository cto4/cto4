"use client";
import { useWindowScroll } from "@mantine/hooks";
import { Affix as MAffix, Button, Transition, rem } from "@mantine/core";
import { Icon } from "@iconify/react";

const Affix = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <MAffix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              variant="default"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              leftSection={<Icon icon="tabler:arrow-up" style={{ width: rem(16), height: rem(16) }} />}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </MAffix>
    </>
  );
};

export default Affix;
