export default function DashboardMenuButton({ onClickFunc }) {
  return (
    <div
      className="fixed bottom-4 right-4 flex cursor-pointer items-center justify-center rounded-full bg-[#00B8D9] p-2 transition-all hover:bg-orange-500"
      onClick={onClickFunc}
    >
      <img src="/grid.svg" alt="Grid Icon" className="h-8 w-8" />
    </div>
  );
}
