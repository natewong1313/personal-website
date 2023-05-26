export default function Navbar() {
  return (
    <div className="max-w-5xl py-6 px-8 mx-auto flex justify-between items-center">
      <img src="/white_logo.svg" alt="Nate Wong" className="h-11 w-11" />
      <nav className="space-x-4">
        <a
          className="hover:text-blue-500 hover:underline"
          href="https://www.github.com/natewong1313"
          target="_blank"
        >
          Github
        </a>
        <a
          className="hover:text-blue-500 hover:underline"
          href="https://www.linkedin.com/in/nate-wong-929b28191/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="hover:text-blue-500 hover:underline"
          href="mailto:natewong1@gmail.com"
          target="_blank"
        >
          Email
        </a>
      </nav>
    </div>
  )
}
