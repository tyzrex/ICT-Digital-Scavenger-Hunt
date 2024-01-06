"use client";

import { useEffect, useState } from "react";

import { toast } from "sonner";

import {
  checkLastHint,
  checkPassword,
  getNewPassword,
} from "../actions/user-action";

type Props = {
  id: number;
  route: any;
};

export default function DynamicHintPage({ id, route }: Props) {
  const [password, setPassword] = useState("");
  const [hint, setHint] = useState<string | undefined>("");
  const [newPassword, setNewPassword] = useState<string | undefined>("");
  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      const response = await checkPassword(id, password, route);
      if (response === true) {
        toast.success("Correct Password");
        const nextHint = await getNewPassword(id, route);
        setHint(nextHint.location);
        setNewPassword(nextHint.password);
      } else {
        toast.error("Wrong Password");
      }
    } catch (error) {
      toast.error("Wrong Password");
    }
  };

  useEffect(
    () => {
      async function fetchData() {
        await checkLastHint(id, route);
      }
      fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <div className="flex flex-col items-start pb-20">
        <form
          className="flex flex-col justify-center mt-10 px-6 w-full lg:max-w-4xl gap-5 "
          onSubmit={handleClick}
        >
          <label
            htmlFor="password"
            className="text-white text-2xl font-bold font-sans"
          >
            Enter the Previous Password
          </label>
          <div className="flex justify-center flex-col gap-5">
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              className="border-2 border-gray-800 px-4 placeholder:text-gray-600 bg-transparent h-20 w-full text-white font-bold font-sans"
            />
            <button
              className="bg-blue-600 text-white font-bold font-sans text-md px-6 py-4 hover:bg-red-50"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        {newPassword && hint && (
          <div className="flex flex-col px-6 items-center justify-center gap-5 mt-10">
            <div className="p-4 rounded-md bg-blue-600 text-white font-sans w-full min-h-[160px] space-y-4">
              <h2 className="text-xl font-semibold">
                Hint for the next destination
              </h2>
              <p className="text-xl text-white ">
                The hint for the next destination is
                <br />
                <span className="text-white font-bold">{hint}</span>
              </p>
            </div>
            <div className="p-4 rounded-md bg-green-600 font-sans w-full min-h-[160px] text-white space-y-4">
              <h2 className="text-xl font-semibold">New Password</h2>
              <p className="text-xl text-white">
                The password for the next QR is
                <br />
                <span className="text-white font-bold">{newPassword}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
