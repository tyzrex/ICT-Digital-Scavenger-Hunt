import { RouteType } from "next/dist/lib/load-custom-routes";

interface Hint {
  id: number;
  location_hint: string;
  password: string;
  type: RouteType;
}

export default async function FirstHintPage({ hint }: { hint: any }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-6 gap-5 mt-10 w-full">
        <div className="p-4 rounded-md bg-yellow-600 font-sans w-full min-h-[160px] text-white space-y-4">
          <h2 className="text-xl font-semibold">Speakers Note:</h2>
          <p className="text-xl text-white">
            <span className="text-white font-bold">{hint && hint.quote}</span>
          </p>
        </div>
        <div className="p-4 rounded-md bg-blue-600 text-white font-sans w-full min-h-[160px] space-y-4">
          <h2 className="text-xl font-semibold">
            Hint for the next destination
          </h2>
          <p className="text-xl text-white ">
            The hint for the next destination is
            <br />
            <span className="text-white font-bold">
              {hint && hint.location_hint}
            </span>
          </p>
        </div>
        <div className="p-4 rounded-md bg-green-600 font-sans w-full min-h-[160px] text-white space-y-4">
          <h2 className="text-xl font-semibold">New Password</h2>
          <p className="text-xl text-white">
            The password for the next QR is
            <br />
            <span className="text-white font-bold">
              {hint && hint.password}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
