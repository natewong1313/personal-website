import { Star } from "lucide-react"

type Props = {
  repoData: {
    goReactSSR: Repo
    birdBot: Repo
    umwCribs: Repo
  }
}
type Repo = {
  html_url: string
  stargazers_count: number
}

export default function OpenSourceProjects({ repoData }: Props) {
  return (
    <>
      <p className="font-noto mt-4 text-lg underline underline-offset-2 decoration-zinc-500">
        Projects
      </p>
      <p className="font-noto text-sm text-zinc-700">
        I'm a big open-source advocate. Here's some projects that I have on my{" "}
        <a
          href="https://github.com/natewong1313"
          target="_blank"
          className="text-blue-700 hover:underline"
        >
          GitHub
        </a>
      </p>
      <div className="grid grid-cols-3 mt-3 gap-4">
        <Project
          name="Go React SSR"
          url={repoData.goReactSSR.html_url}
          stars={repoData.goReactSSR.stargazers_count}
          description="Library to build full-stack web apps with React and Go. Plus end-to-end type safety"
        />
        <Project
          name="Bird Bot"
          url={repoData.birdBot.html_url}
          stars={repoData.birdBot.stargazers_count}
          description="I got bored during covid so I built a bot to help people buy Nintendo switches. It got featured in numerous large media outlets and I even got a few death threats!"
        />
        <Project
          name="UMW Cribs"
          url={repoData.umwCribs.html_url}
          stars={repoData.umwCribs.stargazers_count}
          description="Website for UMW students to find off-campus housing. Peaked at 1.2k
        daily active users"
        />
      </div>
    </>
  )
}

type ProjectProps = {
  name: string
  url: string
  stars: number
  description: string
}
function Project({ name, url, stars, description }: ProjectProps) {
  return (
    <div className="rounded-xl font-noto">
      <div className="flex justify-between">
        <a href={url} target="_blank" className="text-sm">
          {name}
        </a>
        <span className="flex items-center text-xs">
          {stars}
          <Star size={16} className="ml-1" />
        </span>
      </div>
      <p className="text-xs text-zinc-700 mt-1">{description}</p>
    </div>
  )
}
