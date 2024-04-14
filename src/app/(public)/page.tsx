const rules = [
  {
    id: 1,
    description:
      "Scan the QR placed in different locatons around the college premises to get hints",
  },
  {
    id: 2,
    description: "Complete three Competitive rounds",
  },
  {
    id: 3,
    description: "The fastest one to complete all the rounds wins",
  },
];

export default function Home() {
  return (
    <section className="text-white flex flex-col items-start mt-2 p-4">
      <h1 className="text-2xl md:text-5xl font-bold text-left">How to win?</h1>
      <div className="mt-10 flex flex-col gap-5 items-start">
        {rules.map((rule) => (
          <div
            key={rule.id}
            className="flex items-center justify-center gap-10"
          >
            <div className="rounded-xl h-[40px] w-[40px] p-8 flex items-center justify-center bg-white">
              <h1 className="text-2xl md:text-5xl font-bold text-left text-[#E62B1E]">
                {rule.id}
              </h1>
            </div>
            <p key={rule.id} className="text-lg md:text-2xl font-light mt-5">
              {rule.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-[#E62B1E] text-2xl md:text-5xl font-bold text-left">
          READY TO SCAN?
        </h1>
      </div>
    </section>
  );
}
