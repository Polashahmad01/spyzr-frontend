
export default function Chip({ children }) {

  return (
    <div className="inline-block font-light text-sm">
      <div className="rounded-full px-6 py-1 border bg-[#F5F8FA] dark:bg-[#1E1E1E] dark:border-white/10">
        {children}
      </div>
    </div>
  )
}
