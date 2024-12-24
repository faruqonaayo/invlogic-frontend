import Button from "../Button";

export default function CallToAction() {
  return (
    <div className="call-to-action flex w-full flex-col items-center justify-center gap-4 px-10 py-16 md:flex-row md:items-start md:gap-16">
      <img
        className="w-full rounded-lg md:w-80"
        src="/hero/hero1.jpg"
        alt="Call to Action Image"
      />
      <div className="flex w-full flex-col items-center justify-center gap-2 text-center md:w-2/4 md:items-start md:text-left">
        <h2 className="font-montserrat text-2xl font-extrabold tracking-wider text-[#00B8D9] md:text-3xl">
          OUR GOAL
        </h2>
        <p className="text-base tracking-wide md:text-lg">
          As a user you can take control of your projects with ease and
          efficiency! Simplify workflows, boost team productivity, and stay
          organized with our project management app. Whether you’re looking to
          transform chaos into clarity, master collaboration, or stay on track
          every step of the way, our platform has you covered. Get started for
          free today and experience stress-free, smarter project management that
          helps you stay ahead!
        </p>
        <Button className="mt-6 h-10 w-44 rounded-lg bg-[#e26437] font-semibold text-white transition-all hover:bg-[#FF6F3C]">
          Boost Productivity
        </Button>
      </div>
    </div>
  );
}
