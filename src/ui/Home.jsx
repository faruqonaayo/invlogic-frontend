import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div id="hero">
        <div
          className={`absolute left-0 top-16 -z-20 h-[500px] w-full bg-[url('/hero/hero2.jpg')] bg-cover`}
        >
          <div className="h-full w-full bg-black opacity-70"></div>
        </div>

        <div className="flex h-[500px] w-full flex-col items-center justify-center">
          <h1 className="mb-1 font-montserrat text-4xl font-bold tracking-wider text-white md:text-5xl">
            INVLOGIC
          </h1>
          <p className="mb-8 w-3/4 text-center font-montserrat text-base font-medium text-[#00B8D9] md:text-lg">
            Your ultimate project management companion to organize, collaborate,
            and deliver results all in one place.
          </p>
          <div className="hero-action flex flex-col gap-6 md:flex-row">
            <button
              className="h-10 w-44 rounded-full bg-[#04a9c6] p-1 font-semibold tracking-wide text-white transition-all hover:bg-[#00B8D9]"
              onClick={() => navigate("auth/login")}
            >
              Get Started
            </button>
            <button className="h-10 w-44 rounded-full border-2 border-[#00B8D9] p-1 font-semibold tracking-wide text-[#00B8D9] transition-all hover:bg-white">
              About Developer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
