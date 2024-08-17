"use client";
import { Paper } from "@mantine/core";
import { useEffect, useState } from "react";

const ScreenBox = (props: any) => {
  const [height, setHeight] = useState(null);
  useEffect(() => {
    const body = globalThis?.document.querySelector(".mantine-AppShell-main");
    setHeight(body.clientHeight);
  }, []);

  return <Paper h={height ? height - 110 : null} {...props} />;
};

export default ScreenBox;
