import ICTMeetup from "/public/ICT_Meetup_v7.png";
import Image from "next/image";

export default function ScavengerHero() {
  return (
    <>
      <div className="flex flex-col items-start justify-center mt-2 gap-5 px-6">
        <Image src={ICTMeetup} alt="ICT Meetup Logo" width={500} height={500} />
        {/* write something interesting here */}
      </div>
    </>
  );
}
