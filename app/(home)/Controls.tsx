"use client";

import { useRouter } from "next/navigation";
import { Flex, Input, Pagination, Select } from "@mantine/core";
import { ListResult, RecordModel } from "pocketbase";

type ControlsProps = {
  sort: string;
  pb: ListResult<RecordModel>;
};

const Controls = ({ sort, pb }: ControlsProps) => {
  const router = useRouter();

  const push = (key: any, value: any) => {
    const url = new URL(globalThis?.location.href);
    url.searchParams.set(key, value);
    router.push(url.href);
  };

  return (
    <Flex justify="space-between" my={20}>
      <Pagination.Root total={pb.totalPages} defaultValue={pb.page} onChange={(e) => push("page", e)}>
        <Flex gap={5} align="center">
          <Pagination.Previous h={36} />
          <Input readOnly h={36} w={80} value={`${pb.page} / ${pb.totalPages}`} />
          <Pagination.Next h={36} />
        </Flex>
      </Pagination.Root>
      <Select w={110} value={sort} onChange={(e) => push("sort", e)} data={["updated", "title"]} />
    </Flex>
  );
};

export default Controls;
