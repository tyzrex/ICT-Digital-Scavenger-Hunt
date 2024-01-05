"use client";

import { useState } from "react";

import { toast } from "sonner";

import { addNewHint } from "@/app/actions/user-action";

export default function AddHint() {
  const [hint, setHint] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await addNewHint(hint, password);
      if (response) {
        toast.success("Hint Added Successfully");
        setHint("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="text-white flex flex-col uppercase items-start w-full mt-10">
        <h1 className="text-2xl md:text-4xl font-bold text-left">Add Hint</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center mt-10 max-w-[80%] w-full lg:max-w-3xl gap-5"
        >
          <input
            className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl"
            type="text"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
            placeholder="Hint"
          />
          <input
            className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl"
            type="submit"
          >
            Add Hint
          </button>
        </form>
      </section>
    </>
  );
}
