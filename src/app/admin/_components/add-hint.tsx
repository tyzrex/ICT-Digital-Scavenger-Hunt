"use client";

import { useState } from "react";

import { toast } from "sonner";

import { addNewHint } from "../../../actions/user-action";

export default function AddHint() {
  const [hint, setHint] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await addNewHint(hint, password, type as any);
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
          className="p-10 bg-black mb-10 flex flex-col justify-center mt-10 max-w-[80%] w-full lg:max-w-3xl gap-5"
        >
          <input
            className="bg-zinc-800 px-4 py-2 rounded-md font-bold text-xl"
            type="text"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
            placeholder="Hint"
          />
          <input
            className="bg-zinc-800 px-4 py-2 rounded-md font-bold text-xl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <select
            className="bg-zinc-800 px-4 py-2 rounded-md font-bold text-xl"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Route1">Route 1</option>
            <option value="Route2">Route 2</option>
            <option value="Route3">Route 3</option>
            <option value="Route4">Route 4</option>
            <option value="Route5">Route 5</option>
          </select>
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
