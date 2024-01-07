"use client";
import { useState } from "react";

import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { editExistingHint } from "@/actions/user-action";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

editExistingHint;

export default function EditButton({ hint }: { hint: any }) {
  const [location_hint, setLocationHint] = useState(hint.location_hint);
  const [password, setPassword] = useState(hint.password);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await editExistingHint(hint.id, location_hint, password);
      if (response) {
        toast.success("Hint Added Successfully");
      }
    } catch (error) {
      toast.error("Error when adding hint");
      console.log(error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-blue-600 px-4 py-2 rounded-md font-bold text-xl">
          <Edit className="cursor-pointer" size={18} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-white">Edit Entry</DialogTitle>
            <DialogDescription className="text-white flex flex-col gap-5">
              <div>
                <p className="text-sm font-bold">Hint</p>
                <input
                  type="text"
                  className="bg-zinc-800 px-4 py-2 rounded-md font-bold text-xl"
                  value={location_hint}
                  onChange={(e) => setLocationHint(e.target.value)}
                />
              </div>

              <div>
                <p className="text-sm font-bold">Password</p>
                <input
                  type="text"
                  className="bg-zinc-800 px-4 py-2 rounded-md font-bold text-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <button
                onClick={handleSubmit}
                className="bg-white text-black px-4 py-2 rounded-md font-bold text-xl"
                type="submit"
              >
                Save
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
