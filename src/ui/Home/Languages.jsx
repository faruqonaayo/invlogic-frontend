import LanguageItem from "./LanguageItem";

export default function Languages() {
  return (
    <div className="call-to-action flex w-full flex-col items-center justify-center gap-4 bg-white px-10 py-10 md:gap-16">
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
        <h2 className="font-montserrat text-2xl font-extrabold tracking-wider md:text-3xl">
          TECHNOLOGIES
        </h2>
        <div className="grid grid-cols-2 grid-rows-1 gap-8 sm:grid-cols-3 md:grid-cols-6">
          <LanguageItem language="HTML" />
          <LanguageItem language="CSS" />
          <LanguageItem language="Tailwind" />
          <LanguageItem language="React" />
          <LanguageItem language="NodeJS" />
          <LanguageItem language="Mongodb" />
        </div>
      </div>
    </div>
  );
}
