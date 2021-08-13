import Link from "next/link"

import { DiCssdeck } from "react-icons/di"
import { DiGithubBadge } from "react-icons/di"

const navs = [
  {
    href: "projects",
    text: "Projects",
  },
  {
    href: "real-projects",
    text: "Real Projects",
  },
  {
    href: "skills",
    text: "Skills",
  },
  {
    href: "about",
    text: "About",
  },
]

const Navbar = () => {
  return (
    <div className=" py-4 text-lg">
      <div className=" grid gap-3  text-white md:flex place-content-between w-4/5 items-center  mx-auto">
        <div>
          <DiCssdeck size="2rem" className="inline-block" />
          Parfolio
        </div>
        <div className="grid md:flex justify-evenly md:flex-1">
          {navs.map((nav, index) => (
            <a
              key={index}
              className="hover:text-red-600 transition-color duration-500 "
              href={`#${nav.href}`}
            >
              {nav.text}
            </a>
          ))}
        </div>
        <div>
          <a
            className="hover:text-red-600 transition-color duration-500 "
            href="https://github.com/siteslabs/siteslabs.github.io/blob/master/README.md"
            target="_blank"
          >
            <DiGithubBadge size="2rem" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
