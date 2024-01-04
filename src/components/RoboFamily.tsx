"use client";
import RoboFamily from "/public/digitalsvanger.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RoboFamilyImage() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col items-end justify-center mt-10 gap-5 px-6">
        <p className="text-white text-2xl md:text-4xl font-bold">
          DIGITAL SCAVENGER HUNT
        </p>

        <Image
          className="mt-10"
          src={RoboFamily}
          alt="Robo Family"
          width={800}
          height={500}
        />
        {/* write something interesting here */}
      </div>
    </>
  );
}
