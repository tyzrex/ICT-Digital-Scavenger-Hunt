import ITClub from "/public/it_club_logo.png";
import PrimeCollege from "/public/prime_college.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 backdrop-blur-xl bg-black/60 px-6">
        <Image src={ITClub} alt="IT Club Logo" width={150} height={50} />
        <Image
          src={PrimeCollege}
          alt="Prime College Logo"
          width={150}
          height={50}
        />
      </nav>
    </>
  );
}
