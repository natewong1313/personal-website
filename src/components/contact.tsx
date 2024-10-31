import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons"

export default function Contact() {
  return (
    <>
      <p className="font-noto mt-4 text-lg underline underline-offset-2 decoration-zinc-500">
        Get in touch
      </p>
      <p className="text-zinc-700 text-sm">
        Feel free to email me directly at{" "}
        <a
          href="mailto:natewong1@gmail.com"
          className="text-blue-700 hover:underline"
        >
          natewong1@gmail.com
        </a>
      </p>
      <div className="flex space-x-3 mt-3 text-zinc-700">
        <a href="https://www.github.com/natewong1313" target="_blank">
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nate-wong-929b28191/"
          target="_blank"
        >
          <SiLinkedin />
        </a>
      </div>
    </>
  )
}
