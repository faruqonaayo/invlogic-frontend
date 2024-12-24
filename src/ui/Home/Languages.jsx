import Button from "../Button";

export default function Languages() {
  return (
    <div className="call-to-action flex w-full flex-col items-center justify-center gap-4 bg-white px-10 py-16 md:gap-16">
      <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
        <h2 className="font-montserrat text-2xl font-extrabold tracking-wider md:text-3xl">
          BUILT WITH
        </h2>
        <div>
          <div>
            <img src="/languages/react.png" alt="React Logo" className="" />
          </div>
        </div>
        <Button className="mt-6 h-10 w-44 rounded-lg bg-[#e26437] font-semibold text-white transition-all hover:bg-[#FF6F3C]">
          Get Started
        </Button>
      </div>
    </div>
  );
}
