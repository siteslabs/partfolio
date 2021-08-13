import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { SiJavascript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiReactrouter } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { BsFillBootstrapFill } from "react-icons/bs"
import { DiSass } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"

const skills = [
  {
    icon: <AiFillHtml5 className="text-yellow-600" />,
    title: "HTML5",
  },
  {
    icon: <DiCss3 className="text-blue-400" />,
    title: "CSS3",
  },
  {
    icon: <DiSass className="text-pink-400" />,
    title: "Sass (Scss)",
  },
  {
    icon: <SiTailwindcss className="text-green-500" />,
    title: "TailwindCSS",
  },
  {
    id: 5,
    icon: <SiJavascript className="text-yellow-400" />,
    title: "JS",
  },
  {
    icon: <FaReact className="text-blue-500" />,
    title: "React",
  },
  {
    icon: <SiReactrouter className="text-blue-500" />,
    title: "React router",
  },
  {
    icon: <SiRedux className="text-blue-500" />,
    title: "Redux",
  },
  {
    icon: (
      <span className="flex">
        <FaReact className="text-blue-500" />
        <SiRedux className="text-blue-500" />
      </span>
    ),
    title: "React-Redux",
  },
  {
    icon: "",
    title: "Axios (AJAX)",
  },
  {
    icon: "",
    title: "Animate css",
  },
  {
    icon: <BsFillBootstrapFill className="text-indigo-500" />,
    title: "Bootstrap",
  },
]

const Skills = () => {
  return (
    <div id="skills" className=" bg-project py-8">
      <div className="w-4/5 mx-auto">
        <div className="text-5xl text-white capitalize font-bold tracking-wide">
          skills
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center text-2xl my-8">
              {skill.icon && skill.icon}
              <span className="text-gray-400 font-bold ml-2">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
