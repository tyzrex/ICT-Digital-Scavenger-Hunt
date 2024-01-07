import LastHintPage from "@/components/last-page";
import { db } from "@/lib/db";
import { RouteType } from "@/lib/utils";

export default async function LastPoint() {
  const maxRoute2Count = await db.scavenger.findFirst({
    where: {
      type: "Route2",
    },
    orderBy: {
      id: "desc",
    },
  });
  const lastHint = await db.scavenger.findUnique({
    where: {
      id: maxRoute2Count?.id,
    },
  });

  if (!lastHint) {
    return (
      <div className="text-white text-center">
        <p className="text-xl font-semibold">No hints found</p>
      </div>
    );
  }
  return (
    <>
      <LastHintPage id={lastHint?.id} route={RouteType.Route2} />
    </>
  );
}
