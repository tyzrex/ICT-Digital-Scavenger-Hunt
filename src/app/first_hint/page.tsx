import { db } from "@/lib/db";

export default async function FirstHint() {
  const hint = await db.scavenger.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(hint);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl text-white font-bold">Prime IT Club presents</h1>
      <p className="text-white text-xl">DIGITAL SCAVENGER HUNT</p>

      <div className="flex flex-col items-center justify-center mt-24">
        <p className="text-white text-2xl font-bold">First Hint</p>
        <p className="text-white text-xl">
          Location Hint: {hint?.location_hint}
        </p>
        <p className="text-white text-xl">
          Password for next QR: {hint?.password}
        </p>
      </div>
    </main>
  );
}
