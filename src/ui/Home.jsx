export default function Home() {
  return (
    <>
      <div id="hero">
        <div
          className={`absolute left-0 top-16 -z-20 h-[500px] w-full bg-[url('/hero/hero2.jpg')] bg-cover`}
        >
          <div className="h-full w-full bg-black opacity-70"></div>
        </div>

        <div className="flex h-[500px] w-full flex-col items-center justify-center">
          <h1 className="mb-1 font-montserrat text-4xl font-bold tracking-wider text-[#FFFFFF]">
            INVLOGIC
          </h1>
          <p className="mb-8 w-3/4 text-center font-montserrat text-base font-medium text-[#FF6F3C]">
            Your ultimate project management companion to organize, collaborate,
            and deliver results all in one place.
          </p>
          <div className="hero-action flex flex-col gap-6 md:flex-row">
            <button className="h-10 w-44 rounded-full bg-[#FF6F3C] p-1 text-white">
              Get Started
            </button>
            <button className="h-10 w-44 rounded-full border-2 border-[#FF6F3C] bg-white p-1 text-[#FF6F3C]">
              About Developer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
