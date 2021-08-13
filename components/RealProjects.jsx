import project10 from "../images/projects/project-10.png"
import project11 from "../images/projects/project-11.png"
import project12 from "../images/projects/project-12.png"

import Card from "./Card"
import styles from "../styles/Project.module.css"

const projects = [
  {
    id: 10,
    imgUrl: project10,
    title: "Новая Норма",
    url: "http://www.norma.kg/",
    stacks: [
      "HTML5 (JSX)",
      "React js",
      "react-flip-move",
      "aos",
      "Axios (AJAX)",
      "Bootstrap",
      "React-modal",
      "react-preloaders",
      "react-router-dom",
      "react-toastify",
      "etc.",
    ],
    codeSrc: "http://www.norma.kg/",
  },
  {
    id: 11,
    imgUrl: project11,
    title: "ОФД - НН",
    url: "http://ofd.norma.kg/",
    stacks: [
      "HTML5 (JSX)",
      "React js",
      "aos",
      "Axios (AJAX)",
      "Bootstrap",
      "react-router-dom",
      "react-toastify",
      "etc.",
    ],
    codeSrc: "http://ofd.norma.kg/",
  },
  {
    id: 12,
    imgUrl: project12,
    title: "Личный кабинет НН",
    url: "http://lk.norma.kg/login",
    stacks: [
      "HTML5 (JSX)",
      "React js",
      "redux",
      "react-redux",
      "redux-thunk",
      "thunk",
      "Axios (AJAX)",
      "react-router-dom",
      "react-toastify",
      "etc.",
    ],
    codeSrc: "http://lk.norma.kg/login",
  },
]

const RealProjects = () => {
  return (
    <div id="real-projects" className={`${styles.img} py-8`}>
      <div className="w-4/5 mx-auto">
        <div className="text-5xl text-white capitalize font-bold tracking-wide">
          Real projects
        </div>
        <div className="grid gap-y-10 2xl:grid-cols-2 justify-center my-8 ">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RealProjects
