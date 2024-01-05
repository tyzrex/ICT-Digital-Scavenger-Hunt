import { db } from "@/lib/db";

export default async function LastPoint() {
  const count = await db.scavenger.count();
  const lastHint = await db.scavenger.findUnique({
    where: {
      id: count,
    },
  });
  return (
    <>
      <main className="flex flex-col items-center">
        <div className="flex flex-col px-6 lg:flex-row items-center justify-center gap-5 mt-10 w-full">
          <div className="p-4 rounded-md bg-blue-600 text-white font-sans w-full md:max-w-[400px] min-h-[160px] space-y-4">
            <h2 className="text-xl font-semibold">
              Hint for the next destination
            </h2>
            <p className="text-xl text-white ">
              The hint for the next destination is
              <br />
              <span className="text-white font-bold">
                {lastHint && lastHint.location_hint}
              </span>
            </p>
          </div>
          <div className="p-4 rounded-md bg-green-600 font-sans w-full md:max-w-[400px] min-h-[160px] text-white space-y-4">
            <h2 className="text-xl font-semibold">New Password</h2>
            <p className="text-xl text-white">
              The password for the next QR is
              <br />
              <span className="text-white font-bold">
                {lastHint && lastHint.password}
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
