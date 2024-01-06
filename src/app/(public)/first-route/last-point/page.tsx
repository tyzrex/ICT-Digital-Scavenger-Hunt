import LastHintPage from "@/components/last-page";
import { db } from "@/lib/db";

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
  return (
    <>
      <LastHintPage lastHint={lastHint} />
    </>
  );
}
