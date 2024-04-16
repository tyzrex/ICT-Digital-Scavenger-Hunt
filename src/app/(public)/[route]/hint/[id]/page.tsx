"use client";

import DynamicHintPage from "@/components/dynamic-hint";
import { RouteType } from "@/lib/utils";
import { Scavenger } from "@prisma/client";

type Props = {
  params: {
    route: Scavenger["type"];
    id: number;
  };
};

export default function Hint({ params }: Props) {
  return (
    <>
      <DynamicHintPage id={params.id} route={params.route} />
    </>
  );
}
