"use client";
import { Trash } from "lucide-react";
import { toast } from "sonner";

import { deleteExistingHint } from "@/actions/user-action";

export default function DeleteHint({ hint }: { hint: any }) {
  const deleteHint = async () => {
    try {
      const response = await deleteExistingHint(hint.id);
      toast.success("Hint Deleted Successfully");
    } catch (error) {
      toast.error("Error when deleting hint");
    }
  };
  return (
    <>
      <button
        onClick={deleteHint}
        className="bg-red-600 px-2 py-2 rounded-md font-bold text-xl"
      >
        <Trash className="cursor-pointer" size={18} />
      </button>
    </>
  );
}
