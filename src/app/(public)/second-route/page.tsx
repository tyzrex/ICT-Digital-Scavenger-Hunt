import FirstHintPage from "@/components/first-page";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Page() {
  const firstInDb = await db.scavenger.findFirst({
    where: {
      type: "Route2",
    },
    orderBy: {
      id: "asc",
    },
  });
  if (!firstInDb) {
    return (
      <div className="text-white text-center">
        <p className="text-xl font-semibold">No hints found</p>
      </div>
    );
  }

  const hint = await db.scavenger.findUnique({
    where: {
      id: firstInDb?.id,
    },
  });

  return (
    <>
      <FirstHintPage hint={hint} />
    </>
  );
}
