"use client";
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
      <button onClick={deleteHint}>Delete</button>
    </>
  );
}
