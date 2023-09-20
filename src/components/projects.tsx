import type { IconType } from "@icons-pack/react-simple-icons"
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRemix,
  SiPython,
  SiQt,
  SiMongodb,
  SiGo,
  SiElectron,
  SiPostgresql,
  SiDocker,
  SiSelenium,
  SiMysql,
} from "@icons-pack/react-simple-icons"

type Language = {
  name: string
  icon: IconType
}

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-hanken font-semibold">Featured Projects</h1>
      <div className="flex flex-col pt-2 space-y-6">
        <Project
          title="Mercury"
          date="October 2018-August 2021"
          link="https://www.mercuryaio.com/"
          languages={[
            { name: "Golang", icon: SiGo },
            { name: "React", icon: SiReact },
            { name: "React Native", icon: SiReact },
            { name: "Electron", icon: SiElectron },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Docker", icon: SiDocker },
          ]}
          descriptions={[
            `Mercury is a desktop app that helped small business owners automate the process of acquiring inventory for their eccomerce businesses. It included a companion mobile app for getting notifications and viewing their data.`,
            `This was the most time-consuming project I've ever developed and taught me a lot about building production grade apps. Dealing with issues such as mitigating DDOS attacks, handling user authentication, and scaling the rest API with Kubernetes to serve hundreds of thousands of requests per second has prepared me for the workforce.`,
          ]}
        />
        <Project
          title="Go React SSR"
          date="September 2023"
          link="https://github.com/natewong1313/go-react-ssr"
          languages={[
            { name: "Golang", icon: SiGo },
            { name: "React", icon: SiReact },
            { name: "Typescript", icon: SiTypescript },
          ]}
          descriptions={[
            `Drop in plugin for rendering React components server side with Go. It enables end to end type safety and allows you to pass down props from Go to React.`,
            `Published as a Go package and open-sourced on Github.`,
          ]}
        />
        <Project
          title="UMW Cribs"
          date="June-August 2023"
          link="https://github.com/natewong1313/UMW-Cribs"
          languages={[
            { name: "Typescript", icon: SiTypescript },
            { name: "React", icon: SiReact },
            { name: "Remix", icon: SiRemix },
            { name: "MySQL", icon: SiMysql },
          ]}
          descriptions={[
            `Web app designed to help students find housing near the University of Mary Washington. It's built with React Remix and uses MySQL for storing housing data.`,
            `Housing data is scraped from a variety of websites, cleaned, and stored in a database. A cron job is used to update the database every day.`,
          ]}
        />
        <Project
          title="Orpheus Storefront"
          date="July-August 2022"
          link="https://github.com/natewong1313/Orpheus"
          languages={[
            { name: "Typescript", icon: SiTypescript },
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Mongo DB", icon: SiMongodb },
          ]}
          descriptions={[
            `Sample storefront for building a custom shopping website with the Stripe
            api. It uses Next.js for the React framework and uses MongoDB for
            product storage.`,
            `The website has a full checkout flow and can be used as a basis to build
            beautiful ecommerce websites with Stripe and React.`,
          ]}
        />
        <Project
          title="Bird Bot"
          date="March-April 2020"
          link="https://github.com/natewong1313/bird-bot"
          languages={[
            { name: "Python", icon: SiPython },
            { name: "PyQt", icon: SiQt },
          ]}
          descriptions={[
            `Desktop software designed to help real people purchase the elusive
            Nintendo Switch before scalpers could get their hands on it.`,
            `The user interface inspired countless other projects to pursue creating
            beautiful and performant ui's in pure Python.`,
          ]}
        />
        <Project
          title="UMW Class Monitor"
          date="November 2021"
          link="https://github.com/natewong1313/UMW-Class-Monitor"
          languages={[{ name: "Golang", icon: SiGo }]}
          descriptions={[
            `A command line application that notifies a student via text message when a full class they want to get in to has an open spot`,
          ]}
        />
        <Project
          title="Recaptcha Fullauto"
          date="April 2021"
          link="https://github.com/natewong1313/recaptcha-fullauto"
          languages={[
            { name: "Python", icon: SiPython },
            { name: "Selenium", icon: SiSelenium },
          ]}
          descriptions={[
            `A project designed to automatically solve Recaptchas. It bypasses Google's bot detection with Selenium and uses the AWS Rekognition API to classify images.`,
          ]}
        />
      </div>
    </section>
  )
}

type ProjectProps = {
  title: string
  date: string
  link: string
  descriptions: string[]
  languages: Language[]
}
function Project({ title, date, link, descriptions, languages }: ProjectProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-1">
        <a
          className="text-lg font-medium text-zinc-100 hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          {title}
        </a>
        <span className="text-zinc-500 text-xl">·</span>
        <span className="text-sm text-zinc-400">{date}</span>
      </div>
      <div className="flex my-2 flex-wrap gap-2">
        {languages.map((language) => (
          <Badge
            icon={language.icon}
            name={language.name}
            key={language.name}
          />
        ))}
      </div>
      <div className="flex flex-col space-y-1.5">
        {descriptions.map((description) => (
          <p className="text-zinc-400" key={description}>
            {description}
          </p>
        ))}
      </div>
    </div>
  )
}

type BadgeProps = {
  icon: IconType
  name: string
}
function Badge(props: BadgeProps) {
  return (
    <div className="rounded-sm flex items-center bg-zinc-800 w-fit px-2 text-sm py-1">
      <props.icon size={18} className="mr-2 text-blue-400" />
      {props.name}
    </div>
  )
}
