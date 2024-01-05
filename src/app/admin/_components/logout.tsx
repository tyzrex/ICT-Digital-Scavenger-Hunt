"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  const logout = () => {
    signOut({
      callbackUrl: "/",
    });
  };
  return (
    <button
      onClick={logout}
      className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl"
    >
      Logout
    </button>
  );
}
