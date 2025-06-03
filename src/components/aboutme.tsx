import React, { useEffect, useState } from "react"

const art = `@@@@@@@@@#:         .@@@@@@@@@
@@@#****@@@+        .@@@**#@@@
@@@     .#@@%:      .@@%   @@@
@@@.  =.  =@@@*.    .@@%  .@@@
@@@.  @%-  .*@@%-   :@@%  .@@@
@@@.  #@@*.  -%@@#. .@@%  .@@@
@@@.   +@@@=   +@@@=:@@%  .@@@
@@@.    :#@@#:  :#@@%@@%  .@@@
@@@.  -   =@@@+   =@@@@%  .@@@
@@@.  @%:  .#@@%-  .*@@%  .@@@
@@@.  %@@.   -%@@*.  -%@  .@@@
@@@.  %@@:    .*@@@=  .=  .@@@
@@@   %@@.      :%@@#.     @@@
@@@#**@@@.        +@@@****#@@@
@@@@@@@@@.         :#@@@@@@@@@`

const smallArt = `@@@@@@%.     .@@@@@@
@@:..-@@=    .@@.:@@
@@  +  +@%:  .@%  @@
@@  @@- .%@*  @%  @@
@@   #@#. =@@=@%  @@
@@  . -@@= .#@@%  @@
@@  @*  *@%: -@@  @@
@@  %@.  :%@+  =  @@
@@:.@@.    =@@-..:@@
@@@@@@.     .%@@@@@@`

export default function AboutMe() {
  const animationDelay = 150

  // animate in fetch command
  const commandText = "fetch"
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  useEffect(() => {
    if (currentIndex < commandText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(commandText.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, animationDelay)
      return () => clearTimeout(timeout)
    }
  }, [currentText])
  useEffect(() => {
    setTimeout(
      () => {
        setStartShowingContent(true)
      },
      animationDelay * commandText.length + 200
    )
  }, [])
  const [showContent, setStartShowingContent] = useState(false)
  return (
    <div className="p-2 font-medium">
      <p className="text-fg">
        <span className="text-green">nate</span>@nate-wong.com
        <span className="text-green mx-2">~</span>
        <span>{currentText}</span>
      </p>
      <div className="mt-2 flex">
        {showContent && (
          <>
            <div className="text-blue hidden md:block mr-8">
              <pre>{art}</pre>
            </div>
          </>
        )}
        {showContent && (
          <div>
            <ul className="text-fg" style={{}}>
              <li className="text-blue">
                nate<span className="text-fg">@</span>nate-wong.com
              </li>
              <p>-----------</p>
              <ListElement title="Location" description="Austin, TX" />
              <li>
                <span className="text-blue">Job</span>: Software Engineer Intern
                (<span className="text-orange">Cloudflare</span>)
              </li>

              <ListElement
                title="School"
                description="University of Mary Washington"
              />
              <ListElement
                title="Programming In"
                description="Go, Typescript, Rust, Python"
              />
              <ListElement
                title="Primary Interests"
                description="Distributed & Realtime Systems"
              />
              <ListElement
                title="Side Projects"
                description="Improving Go Web Tooling"
                link="https://github.com/natewong1313/neo"
              />
              <ListElement
                title="Email"
                description="natewong1@gmail.com"
                link="emailto:natewong1@gmail.com"
              />
              <ListElement
                title="Github"
                description="natewong1313"
                link="https://github.com/natewong1313"
              />
              <ListElement
                title="LinkedIn"
                description="nate-wong"
                link="https://www.linkedin.com/in/nate-wong-929b28191/"
              />
            </ul>
            <div className="inline-grid grid-cols-8 grid-rows-2 mt-5">
              <Square color="bg-black" />
              <Square color="bg-red" />
              <Square color="bg-green" />
              <Square color="bg-yellow" />
              <Square color="bg-blue" />
              <Square color="bg-purple" />
              <Square color="bg-cyan" />
              <Square color="bg-fg" />
              <Square color="bg-brightBlack" />
              <Square color="bg-brightRed" />
              <Square color="bg-brightGreen" />
              <Square color="bg-brightYellow" />
              <Square color="bg-brightBlue" />
              <Square color="bg-brightPurple" />
              <Square color="bg-brightCyan" />
              <Square color="bg-fg" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
function ListElement({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link?: string
}) {
  return (
    <li>
      <span className="text-blue">{title}</span>:{" "}
      {link ? (
        <a href={link} className="hover:underline" target="_blank">
          {description}
        </a>
      ) : (
        description
      )}
    </li>
  )
}

function Square({ color }: { color: string }) {
  return <div className={`${color} h-7 w-7`} />
}
