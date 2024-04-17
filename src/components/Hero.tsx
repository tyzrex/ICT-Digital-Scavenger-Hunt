import TedLogo from "../../public/ted.webp";

export default function ScavengerHero() {
  return (
    <>
      <div className="flex flex-col items-start justify-center mt-10 gap-5 px-3">
        <img src={TedLogo.src} alt="TEDxMaitighar" className="w-50 md:w-100" />
      </div>
    </>
  );
}
