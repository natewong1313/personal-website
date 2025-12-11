import { motion } from "motion/react";
import Nav from "./nav";

type Props = {
  currentUrl: URL;
};
export default function Home({ currentUrl }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-500 to-neutral-300">
      <div className="max-w-4xl mx-auto flex flex-col py-16">
        <Nav currentUrl={currentUrl} />
        <div className="grid grid-cols-5 gap-2 py-10">
          <div className="flex flex-col space-y-2">
            <GithubCard />
            <ResumeCard />
            <Contactcard />
          </div>
          <div className="col-span-3">
            <div>
              <MeCard />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <ComingSoonCard />
                <ComingSoonCard />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-2">
              <CloudflareCard />
              <UMWCard />
              <AustinCard />
            </div>
          </div>
        </div>
        {/* <footer className="mt-16 -mx-8"> */}
        {/*   <div className="flex items-center text-white font-medium gap-3"> */}
        {/*     <div className="rounded-full flex items-center justify-center w-8 h-8 text-lg font-bold bg-xboxGreenLight shadow-sm"> */}
        {/*       A */}
        {/*     </div> */}
        {/*     <p */}
        {/*       style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} */}
        {/*       className="font-medium text-lg" */}
        {/*     > */}
        {/*       Select */}
        {/*     </p> */}
        {/*   </div> */}
        {/* </footer> */}
      </div>
    </div>
  );
}

function GithubCard() {
  return (
    <motion.a
      className="h-40 relative block"
      href="https://github.com/natewong1313"
      target="_blank"
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfLuviePOqQJ1yuhvxr80AsqV91Btr2rqZw&s"
        className="h-full object-cover w-full object-bottom"
      />
      <div className="absolute w-full bottom-0 bg-black/90 text-white p-2">
        <p>Github</p>
      </div>
    </motion.a>
  );
}

function ResumeCard() {
  return (
    <motion.a
      href="https://resume.nate-wong.com/resume.pdf"
      target="_blank"
      className="bg-xboxGreen h-40 text-white flex flex-col justify-between p-2"
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        className="mx-auto mt-6"
      >
        <path
          fill="currentColor"
          d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
        />
      </svg>
      <h1 className="text-xl">Resume</h1>
    </motion.a>
  );
}

function Contactcard() {
  return (
    <motion.a
      href="mailto:natewong1313@proton.me"
      className="bg-xboxGreen h-40 text-white flex flex-col justify-between p-2"
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        className="mx-auto mt-6"
      >
        <path fill="currentColor" d="M12 15l-8 -5v8h16v-8l-8 5Z" />
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M3 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z" />
          <path d="M3 8.5l9 5.5l9 -5.5" />
        </g>
      </svg>
      <h1 className="text-xl">Contact</h1>
    </motion.a>
  );
}

function MeCard() {
  return (
    <motion.div
      className="h-[328px] w-full relative z-0"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        zIndex: 10,
      }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <img src="/me.JPG" className="w-full h-full object-cover object-top" />
      <div className="absolute w-full bottom-0 bg-black/90 text-white p-2">
        <p>Nate Wong</p>
      </div>
    </motion.div>
  );
}

function ComingSoonCard() {
  return (
    <motion.div
      className="h-40 relative w-full bg-neutral-700"
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <div className="absolute w-full bottom-0 bg-black/90 text-white p-2">
        <p>Coming soon</p>
      </div>
    </motion.div>
  );
}

function CloudflareCard() {
  return (
    <motion.a
      href="https://www.cloudflare.com/"
      target="_blank"
      className="h-40 relative"
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <img
        src="https://bytexd.com/wp-content/uploads/2022/03/Expose-Web-Services-to-the-Internet-with-Cloudflare-Tunnel-800x500.png"
        className="h-full object-cover"
      />
      <div className="absolute w-full bottom-0 bg-black/90 text-white p-2">
        <p>Systems Engineer</p>
      </div>
    </motion.a>
  );
}

function UMWCard() {
  return (
    <motion.a
      href="https://www.umw.edu/"
      target="_blank"
      className="h-40 relative"
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <img
        src="https://www.umw.edu/news/wp-content/uploads/sites/7/2025/01/NewRelease_FallFlag_AdjBlue.jpg"
        className="h-full object-cover object-right-top"
      />
      <div className="absolute w-full bottom-0 bg-black/90 text-white p-2">
        <p>Class of '25</p>
      </div>
    </motion.a>
  );
}

function AustinCard() {
  return (
    <motion.div
      className="h-40 relative"
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <img
        src="https://www.travelandleisure.com/thmb/hQU9BuDobYrsGKxux0Bo8BzqGZI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/downtown-austin-texas-ATXTHINGS0122-972bddebf6c94ba6a192bfe408a3c779.jpg"
        className="h-full object-cover object-right-top"
      />
      <div className="absolute w-full bottom-0 bg-black/90 text-white p-2">
        <p>Austin, Texas</p>
      </div>
    </motion.div>
  );
}
