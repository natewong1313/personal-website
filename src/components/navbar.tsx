import { useEffect, useState } from "react"

export default function NavBar() {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="flex font-medium text-xl px-8 py-4 justify-between">
      <p>Nate Wong</p>
      {/* <p>It's {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p> */}
      <a className="hover:underline" href="https://www.github.com/natewong1313" target="_blank">Work</a>
    </div>
  )
}
