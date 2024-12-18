import { Briefcase, MapPin, School, SquareTerminal } from "lucide-react"
import Cruise from "./elvis"
import Elvis from "./elvis"

export function Hero() {
  return (
    //<>
    //  <h1 className="font-playfair font-semibold text-5xl">Nate Wong</h1>
    //  <p className="font-noto mt-2 text-lg">Software Engineer</p>
    //  <div className="mt-2 font-noto space-y-1.5 text-sm text-zinc-700">
    //    <p className="flex items-center">
    //      <MapPin size={18} className="mr-1.5" />
    //      Alexandria, Virginia
    //    </p>
    //    <p className="flex items-center">
    //      <School size={18} className="mr-1.5" />
    //      University of Mary Washington
    //    </p>
    //    <p className="flex items-center whitespace-pre-wrap">
    //      <SquareTerminal size={18} className="mr-1.5" />
    //      Founded{" "}
    //      <a
    //        href="https://www.mercuryaio.com/"
    //        target="_blank"
    //        className="text-blue-700 hover:underline"
    //      >
    //        Mercury
    //      </a>
    //      , a 6-figure saas company, when I was 16
    //    </p>
    //    <p className="flex items-center">
    //      <Briefcase size={18} className="mr-1.5" />
    //      Interned at NextEra Energy, Businessolver, and Dev Technology Group
    //    </p>
    //  </div>
    //</>
    <div className="grid grid-cols-3">
      <Elvis />
      <div className="py-4 col-3">
        <p className="text-4xl font-semibold">Hello</p>
        <p className="text-xl font-medium mt-3">I'm Nate, a software engineer based in Virginia. I'm currently studying computer science at the University of Mary Washington.</p>
        <div className="mt-3 text-xl space-x-2">
          <a className="hover:underline" href="https://www.github.com/natewong1313" target="_blank">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/in/nate-wong-929b28191/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}
