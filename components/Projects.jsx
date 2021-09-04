import project1 from "../images/projects/project-1.png"
import project2 from "../images/projects/project-2.png"
import project3 from "../images/projects/project-3.png"
import project4 from "../images/projects/project-4.png"
import project5 from "../images/projects/project-5.png"
import project6 from "../images/projects/project-6.png"
import project7 from "../images/projects/project-7.png"
import project8 from "../images/projects/project-8.png"
import project9 from "../images/projects/project-9.png"
import project13 from "../images/projects/project-13.png"
import project14 from "../images/projects/project-14.png"
import Card from "./Card"

const projects = [
  {
    id: 11,
    imgUrl: project13,
    title: "Google v2",
    url: "https://google-v2-two.vercel.app/",
    stacks: [
      "Next js",
      "HTML5 (JSX)",
      "tailwindcss",
      "AJAX (REST API)",
      "HeroIcons",
    ],
    codeSrc: "https://github.com/siteslabs/google-v2",
  },
  {
    id: 10,
    imgUrl: project14,
    title: "Beach resort",
    url: "https://react-resort-e9d634.netlify.app/",
    stacks: [
      "React js",
      "React router dom",
      "React Context",
      "HTML5 (JSX)",
      "AJAX (REST API)",
    ],
    codeSrc: "https://github.com/siteslabs/react-resort",
  },

  {
    id: 8,
    imgUrl: project8,
    title: "Todo List",
    url: "https://beksultan-react-todo-list.netlify.app/",
    stacks: [
      "HTML5 (JSX)",
      "CSS3",
      "React js",
      "react-addons-css-transition-group",
    ],
    codeSrc: "https://github.com/siteslabs/react-todo-list",
  },
  {
    id: 9,
    imgUrl: project9,
    title: "HD movies",
    url: "https://next-js-hd-videos-ktcj98e9f-siteslabs.vercel.app/",
    stacks: [
      "HTML5 (JSX)",
      "tailwindcss",
      "tailwind-scrollbar-hide",
      "Next js",
      "react-flip-move",
      "AJAX",
    ],
    codeSrc: "https://github.com/siteslabs/next-js_hd-videos",
  },
  {
    id: 1,
    imgUrl: project1,
    title: "Site with Bootstrap 4",
    url: "https://siteslabs.github.io/Site_with_bootstrap/index.html",
    stacks: ["HTML5", "CSS3", "Bootstrap 4"],
    codeSrc:
      "https://github.com/siteslabs/siteslabs.github.io/tree/master/Site_with_bootstrap",
  },
  {
    id: 2,
    imgUrl: project2,
    title: "Business site",
    url:
      "https://siteslabs.github.io/website_with_html_and_css/web%20site%20with%20html%20css%20and%20bootstrap.html",
    stacks: ["HTML5", "CSS3", "Bootstrap 4"],
    codeSrc:
      "https://github.com/siteslabs/siteslabs.github.io/tree/master/website_with_html_and_css",
  },
  {
    id: 3,
    imgUrl: project3,
    title: "Business site",
    url: "https://siteslabs.github.io/business%20proj/index.html",
    stacks: ["HTML5", "CSS3", "Bootstrap 4"],
    codeSrc:
      "https://github.com/siteslabs/siteslabs.github.io/blob/master/business%20proj/imgUrl/about-fon.jpg",
  },
  {
    id: 4,
    imgUrl: project4,
    title: "Cocktails",
    url: "https://beksultan-react-cocktail-project.netlify.app/",
    stacks: [
      "HTML5 (JSX)",
      "CSS3",
      "React js",
      "React router",
      "Axios (AJAX)",
      "React-dom",
    ],
    codeSrc: "https://github.com/siteslabs/react-cocktail-project",
  },
  {
    id: 5,
    imgUrl: project5,
    title: "Accordion",
    url: "https://beksultan-react-accordion-project.netlify.app/",
    stacks: ["HTML5 (JSX)", "CSS3", "React js", "React-icons"],
    codeSrc: "https://github.com/siteslabs/react-accordion",
  },
  {
    id: 6,
    imgUrl: project6,
    title: "Menu",
    url: "https://beksultan-react-menu-project.netlify.app/",
    stacks: ["HTML5 (JSX)", "CSS3", "React js"],
    codeSrc: "https://github.com/siteslabs/react-menu-project",
  },
  {
    id: 7,
    imgUrl: project7,
    title: "Lorem ipsum",
    url: "https://beksultan-react-lorem-ipsum.netlify.app/",
    stacks: ["HTML5 (JSX)", "CSS3", "React js"],
    codeSrc: "https://github.com/siteslabs/react-lorem-ipsum",
  },
]

const Projects = () => {
  return (
    <div id="projects" className=" bg-project py-8">
      <div className="w-4/5 mx-auto">
        <div className="text-5xl text-white capitalize font-bold tracking-wide">
          projects
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

export default Projects
