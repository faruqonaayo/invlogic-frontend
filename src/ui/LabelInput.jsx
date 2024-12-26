export default function LabelInput({ labelText, inputType, inputName }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium">{labelText}</label>
      <input
        type={`${inputType}`}
        name={`${inputName}`}
        className="h-auto w-full rounded-sm bg-[#e5e5e5] px-2 py-1 text-sm font-normal focus:outline-[#FF6F3C] focus:outline-dashed focus:outline-1"
      />
    </div>
  );
}
