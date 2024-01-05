"use client";

import { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please enter username and password");
      return;
    }
    try {
      const response = await signIn("credentials", {
        username,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      if (response?.error) {
        toast.error("Wrong username or password");
        return;
      } else {
        toast.success("Login Successful");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="text-white flex flex-col uppercase mt-2 mx-auto w-full items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-left">
          Admin Login
        </h1>
        <form className="flex flex-col justify-center mt-10 max-w-[80%] w-full lg:max-w-3xl gap-5">
          <input
            className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            onClick={handleSignIn}
            className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}
