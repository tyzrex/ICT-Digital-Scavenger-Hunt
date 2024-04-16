import LastHintPage from "@/components/last-page";
import { db } from "@/lib/db";
import { RouteType } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Hint = {
  params: {
    route: RouteType;
  };
};

export default async function LastPoint({ params }: Hint) {
  const maxRouteCount = await db.scavenger.findFirst({
    where: {
      type: params.route,
    },
    orderBy: {
      id: "desc",
    },
  });
  const lastHint = await db.scavenger.findUnique({
    where: {
      id: maxRouteCount?.id,
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
      <LastHintPage id={lastHint?.id} route={params.route} />
    </>
  );
}
