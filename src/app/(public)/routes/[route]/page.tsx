import FirstHintPage from "@/components/first-page";
import { db } from "@/lib/db";
import { Scavenger } from "@prisma/client";

type Hint = {
  params: {
    route: Scavenger["type"];
  };
};

export const dynamic = "force-dynamic";

export default async function Page({ params }: Hint) {
  const hintParam = params.route;
  const firstInDb = await db.scavenger.findFirst({
    where: {
      type: hintParam,
    },
    orderBy: {
      id: "asc",
    },
  });
  if (!firstInDb) {
    return (
      <div className="text-white text-center mt-10">
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
