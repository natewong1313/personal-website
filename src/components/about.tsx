export default function About() {
  const currentAge = Math.floor(
    (new Date().getTime() - new Date(import.meta.env.BIRTH_DATE).getTime()) /
      3.15576e10
  )
  return (
    <section>
      <h1 className="text-4xl font-hanken font-semibold">
        Welcome, I'm Nate 👋
      </h1>
      <div className="text-zinc-400 pt-3 space-y-2">
        <p>
          I'm a {currentAge} year old{" "}
          <span className="text-zinc-100">software engineer</span> living in{" "}
          <span className="text-zinc-100">Virginia</span>. I have a passion for
          creating innovative software projects in my free time.
        </p>
        <p>
          When I was <span className="text-zinc-100">16</span>, I started my
          first SaaS business. After 2 years, we grossed over{" "}
          <span className="text-zinc-100">$130k</span> in revenue and helped{" "}
          <span className="text-zinc-100">500+</span> businesses grow.
        </p>
        <p>
          Now, I'm completing my degree in{" "}
          <span className="text-zinc-100">Computer Science</span> at the
          University of Mary Washington.
        </p>
      </div>
      <nav className="mt-2 text-zinc-400">
        <a
          className="hover:text-blue-500 underline decoration-1 text-blue-400 underline-offset-4"
          href="https://www.github.com/natewong1313"
          target="_blank"
        >
          Github
        </a>
        <span className="mx-1">·</span>
        <a
          className="hover:text-blue-500 underline decoration-1 text-blue-400 underline-offset-4"
          href="https://www.linkedin.com/in/nate-wong-929b28191/"
          target="_blank"
        >
          Linkedin
        </a>
        <span className="mx-1">·</span>
        <a
          className="hover:text-blue-500 underline decoration-1 text-blue-400 underline-offset-4"
          href="mailto:natewong1@gmail.com"
          target="_blank"
        >
          Email
        </a>
      </nav>
    </section>
  )
}
