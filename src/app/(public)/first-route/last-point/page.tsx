import LastHintPage from "@/components/last-page";
import { db } from "@/lib/db";
import { RouteType } from "@/lib/utils";

export default async function LastPoint() {
  const maxRoute1Count = await db.scavenger.count({
    where: {
      type: "Route1",
    },
  });
  const lastHint = await db.scavenger.findUnique({
    where: {
      id: maxRoute1Count,
    },
  });
  console.log(lastHint);
  if (!lastHint) {
    return (
      <div className="text-white text-center">
        <p className="text-xl font-semibold">No hints found</p>
      </div>
    );
  }
  return (
    <>
      <LastHintPage id={lastHint?.id} route={RouteType.Route1} />
    </>
  );
}
