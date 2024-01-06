import { getServerSession } from "next-auth";

import { db } from "@/lib/db";

import { options } from "../api/auth/[...nextauth]/options";
import AddHint from "./_components/add-hint";
import DeleteHint from "./_components/delete-hint";
import EditButton from "./_components/edit-hint";
import Logout from "./_components/logout";

export default async function Admin() {
  const hints = await db.scavenger.findMany({
    orderBy: {
      id: "asc",
    },
  });
  const session = await getServerSession(options);

  return (
    <>
      <div className="flex justify-between  items-center text-white">
        <h1 className="text-2xl md:text-4xl font-bold text-left">
          Admin Dashboard
        </h1>
        <Logout />
      </div>

      <div className="col-span-12 font-sans mt-10">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table text-white  space-y-6 text-sm w-full">
            <thead className="bg-black/60">
              <tr>
                <th className="p-3">Id</th>
                <th className="p-3 text-left">Location Hint</th>
                <th className="p-3 text-left">Password</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {hints.map((hint, index) => (
                <tr className="bg-black/60 " key={index}>
                  <td className="p-3">{hint.id}</td>
                  <td className="p-3">{hint.location_hint}</td>
                  <td className="p-3 font-bold">{hint.password}</td>
                  <td className="p-3 font-bold">{hint.type}</td>
                  <td className="p-3 space-x-4">
                    <EditButton hint={hint} />
                    <DeleteHint hint={hint} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center">
          <AddHint />
        </div>
      </div>
    </>
  );
}
