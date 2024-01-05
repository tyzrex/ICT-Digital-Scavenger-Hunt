"use client";

export default function Home() {
  return (
    <section className="text-white flex flex-col uppercase items-start mt-2 p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-left">
        Welcome to the Digital Scavenger Hunt
      </h1>
      <p className="text-xl md:text-2xl font-bold mt-10 uppercase">
        The rules of the game are simple:
      </p>
      <ol className="list-decimal list-inside mt-5 font-sans">
        <li className="text-md md:text-xl font-bold">
          You will be given a password and a hint for the next location.
        </li>
        <li className="text-md md:text-xl font-bold">
          You have to find the QR code at the location and scan it to get the
          next password and hint.
        </li>
        <li className="text-md md:text-xl font-bold">
          You have to repeat the process until you reach the final destination.
        </li>
        <li className="text-md md:text-xl font-bold">
          The first person to reach the final destination will be the winner.
        </li>
      </ol>
    </section>
  );
}
