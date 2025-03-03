import { Briefcase, MapPin, School, SquareTerminal } from "lucide-react"
import Cruise from "./elvis"
import Elvis from "./elvis"

export function Hero() {
  return (
    <div className="grid grid-cols-3">
      <Elvis />
      <div className="py-4 col-3">
        <p className="text-4xl font-semibold">Hello</p>
        <p className="text-xl font-medium mt-3">
          I'm Nate, a software engineer based in Virginia. I'm currently
          studying computer science at the University of Mary Washington.
        </p>
        <div className="mt-3 text-xl space-x-2">
          <a
            className="hover:underline"
            href="https://www.github.com/natewong1313"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/nate-wong-929b28191/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:underline"
            href="emailto:nwong@mail.umw.edu"
            target="_blank"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
