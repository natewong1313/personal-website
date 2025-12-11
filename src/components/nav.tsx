const navItems = [
  { title: "home", href: "/" },
  { title: "blog", href: "/blog" },
  { title: "projects", href: "/projects" },
  { title: "movies", href: "/movies" },
  { title: "socials", href: "/socials" },
]

type Props = {
  currentUrl: URL
}
export default function Nav({ currentUrl }: Props) {
  const isSelected = (item: (typeof navItems)[0]) => {
    return item.href === currentUrl.pathname
    // return item.href ===
  }
  return (
    <nav className="w-full flex space-x-12 justify-center items-center mx-auto">
      {navItems.map((navItem) => (
        <a
          key={navItem.href}
          className={`text-3xl ${isSelected(navItem) ? "text-white" : "text-white/30"} hover:text-white transition-colors focus-visible:text-white focus:outline-none`}
          style={
            isSelected(navItem)
              ? { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
              : undefined
          }
          href={navItem.href}
        >
          {navItem.title}
        </a>
      ))}
    </nav>
  )
}
