"use client";

import { useState } from 'react';

import { toast } from 'sonner';

import {
  checkPassword,
  getNewPassword,
} from '../actions/user-action';

type Props = {
  id: number;
  route: any;
};

export default function LastHintPage({ id, route }: Props) {
  console.log(id, route);
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

  // useEffect(
  //   () => {
  //     async function fetchData() {
  //       await checkLastHint(id, route);
  //     }
  //     fetchData();
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   []
  // );

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
          <>
            <div className="text-white">
              <div className=" p-6  md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  className="text-green-600 w-16 h-16 mx-auto my-6"
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
                <div className="text-center">
                  <h3 className="md:text-2xl text-base font-semibold text-center">
                    Payment Done!
                  </h3>
                  <p className="text-white font-bold my-2">
                    Thank you for completing the scavenger hunt
                  </p>
                  <p> Have a great day! </p>
                  <div className="py-10 text-center"></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
