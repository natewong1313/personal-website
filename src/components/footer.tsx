import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons"
import type { IconType } from "@icons-pack/react-simple-icons"
import { Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export default function Footer() {
  return (
    <div className="flex justify-between items-center gap-1">
      <p className="text-zinc-400">
        This site was built with{" "}
        <a
          href="https://astro.build/"
          className="hover:underline hover:underline-offset-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"
          target="_blank"
        >
          Astro
        </a>{" "}
        and deployed to{" "}
        <a
          href="https://vercel.com/"
          className="text-slate-100 hover:underline hover:underline-offset-2"
          target="_blank"
        >
          Vercel
        </a>
      </p>
      <div className="flex gap-2">
        <FooterBtn icon={SiGithub} href="https://github.com/natewong1313" />
        <FooterBtn
          icon={SiLinkedin}
          href="https://www.linkedin.com/in/nate-wong-929b28191/"
        />
        <FooterBtn icon={Mail} href="mailto:natewong1@gmail.com" />
      </div>
    </div>
  )
}

type FooterBtnProps = {
  icon: IconType | LucideIcon
  href: string
}
function FooterBtn(props: FooterBtnProps) {
  return (
    <a href={props.href} target="_blank">
      <div className="bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center rounded-sm p-2">
        <props.icon size={22} />
      </div>
    </a>
  )
}
