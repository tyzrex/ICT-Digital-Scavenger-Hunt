import RoboFamily from "/public/image.png";
import Image from "next/image";

export default function RoboFamilyImage() {
  return (
    <>
      <div className="flex flex-col items-end justify-center mt-10 gap-5 px-6 ">
        <p className="text-white text-2xl md:text-4xl font-bold">
          DIGITAL <span className="text-[#E62B1E]">SCAN</span>-VENGER HUNT
        </p>
        <Image
          className="mt-10"
          src={RoboFamily}
          alt="Robo Family"
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
