import { getServerSession } from "next-auth";
import Link from "next/link";

import { db } from "@/lib/db";

import { options } from "../api/auth/[...nextauth]/options";
import AddHint from "./_components/add-hint";

export default async function Admin() {
  const hints = await db.scavenger.findMany({});
  const session = await getServerSession(options);

  return (
    <>
      {/* make a table to see all the hints and the passwords */}
      <div className="flex justify-between  items-center text-white">
        <h1 className="text-2xl md:text-4xl font-bold text-left">
          Admin Dashboard
        </h1>
        <Link href="/api/auth/signout">
          <button className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl">
            Logout
          </button>
        </Link>
      </div>

      <div className="col-span-12 font-sans mt-10">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="p-3">Id</th>
                <th className="p-3 text-left">Location Hint</th>
                <th className="p-3 text-left">Password</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {hints.map((hint, index) => (
                <tr className="bg-gray-800" key={index}>
                  <td className="p-3">{hint.id}</td>
                  <td className="p-3">{hint.location_hint}</td>
                  <td className="p-3 font-bold">{hint.password}</td>
                  <td className="p-3 space-x-4">
                    <button className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl">
                      Edit
                    </button>
                    <button className="bg-red-600 px-4 py-2 rounded-md font-bold text-xl">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AddHint />
      </div>
    </>
  );
}
