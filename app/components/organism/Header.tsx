import { MdOutlineChecklist } from "react-icons/md";

export default function Header() {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 shadow-sm">
        <MdOutlineChecklist
          size={30}
          className="text-indigo-600"
        />
      </div>

      <h1 className="text-4xl font-bold text-slate-900">
        My Todo List
      </h1>
    </div>
  );
}