"use client";
import RoboFamily from "/public/digitalsvanger.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RoboFamilyImage() {
  const pathname = usePathname();
  const hint = pathname.split("/")[2];
  return (
    <>
      <div className="flex flex-col items-end justify-center mt-10 gap-5 px-6 ">
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
        write something interesting here
        {pathname === "/first_hint" && (
          <p className="text-white text-2xl md:text-3xl text-right font-bold uppercase">
            You are at the first location
          </p>
        )}
        {hint && (
          <p className="text-white text-2xl md:text-3xl font-bold uppercase">
            You are at the{" "}
            {hint === "1"
              ? `${hint}st`
              : hint === "2"
              ? `${hint}nd`
              : hint === "3"
              ? `${hint}rd`
              : `${hint}th`}{" "}
            location
          </p>
        )}
      </div>
    </>
  );
}
