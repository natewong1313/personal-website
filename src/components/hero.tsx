import { Briefcase, MapPin, School, SquareTerminal } from "lucide-react"

export function Hero() {
  return (
    <>
      <h1 className="font-playfair font-semibold text-5xl">Nate Wong</h1>
      <p className="font-noto mt-2 text-lg">Software Engineer</p>
      <div className="mt-2 font-noto space-y-1.5 text-sm text-zinc-700">
        <p className="flex items-center">
          <MapPin size={18} className="mr-1.5" />
          Alexandria, Virginia
        </p>
        <p className="flex items-center">
          <School size={18} className="mr-1.5" />
          University of Mary Washington
        </p>
        <p className="flex items-center whitespace-pre-wrap">
          <SquareTerminal size={18} className="mr-1.5" />
          Founded{" "}
          <a
            href="https://www.mercuryaio.com/"
            target="_blank"
            className="text-blue-700 hover:underline"
          >
            Mercury
          </a>
          , a 6-figure saas company, when I was 16
        </p>
        <p className="flex items-center">
          <Briefcase size={18} className="mr-1.5" />
          Interned at NextEra Energy, Businessolver, and Dev Technology Group
        </p>
      </div>
    </>
  )
}
