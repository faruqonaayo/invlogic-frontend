export default function LanguageItem({ language }) {
  return (
    <div className="col-auto row-auto flex cursor-pointer flex-col items-center justify-center gap-8 rounded-2xl border-2 border-gray-400 px-2 py-4 transition-all hover:bg-gray-200">
      <img
        src={`/languages/${language.toLowerCase()}.png`}
        alt={`${language} Logo`}
        className="w-2/4"
      />
      <span className="text-base font-semibold md:text-lg">{language}</span>
    </div>
  );
}
