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
      <a href="/">Nate Wong</a>
      <a className="hover:underline" href="/blog">
        Blog
      </a>
    </div>
  )
}
