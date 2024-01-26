import LastHintPage from "@/components/last-page";
import { db } from "@/lib/db";
import { RouteType } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function LastPoint() {
  const maxRoute3Count = await db.scavenger.findFirst({
    where: {
      type: "Route4",
    },
    orderBy: {
      id: "desc",
    },
  });
  const lastHint = await db.scavenger.findUnique({
    where: {
      id: maxRoute3Count?.id,
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
      <LastHintPage id={lastHint?.id} route={RouteType.Route4} />
    </>
  );
}
