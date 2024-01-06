"use client";

import DynamicHintPage from "@/components/dynamic-hint";
import { RouteType } from "@/lib/utils";

type Props = {
  params: {
    id: number;
  };
};

export default function Hint({ params }: Props) {
  return (
    <>
      <DynamicHintPage id={params.id} route={RouteType.Route3} />
    </>
  );
}
