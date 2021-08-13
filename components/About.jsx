import { HiOutlineMail } from "react-icons/hi"
import { AiTwotonePhone } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"
import { ImTelegram } from "react-icons/im"

const info = [
  {
    title: "Hobbies",
    text: ["Drawing", "Watching movies", "Listening musics"],
  },

  {
    title: "Qualities",
    text: ["Responsibility", "Punctuality", "Sociable", "Positive thinking"],
  },

  {
    title: "Languages",
    text: [
      "Kyrgyz – native",
      "Russian – fluent",
      "English – upper-intermediate",
    ],
  },

  {
    title: "Experiences",
    text: [
      `"Новая Норма" Company (6 month)`,
      "HTML academy (Online)",
      "Code academy (Online)",
      "freeCodeCamp (Online)",
      "Udemy (Online)",
    ],
  },
]

const About = () => {
  return (
    <div id="about" className="text-white bg-gray-800 py-8">
      <div className="w-4/5 mx-auto">
        <div className="text-5xl  capitalize font-bold tracking-wide">
          About Me
        </div>
        <div className="grid gap-y-10 2xl:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center my-8 ">
          {info.map((inf, index) => (
            <div key={index}>
              <div className="text-xl font-bold  italic text-yellow-700">
                {inf.title}
              </div>
              <div className="m-2">
                {inf.text.map((text, index) => (
                  <p className="m-1" key={index}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-5xl  capitalize font-bold tracking-wide">
          Contact Me
        </div>
        <div className="grid gap-10 2xl:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center my-8 ">
          <div className="border border-gray-500 p-4 rounded-md bg-gray-900">
            <div className="text-gray-500 mb-2 ">
              <HiOutlineMail className="inline-block mr-2" />
              Email
            </div>
            <a href="mailto:abc@example.com">beksultan.mamashov@gmail.com</a>
          </div>
          <div className="border border-gray-500 p-4 rounded-md bg-gray-900">
            <div className="text-gray-500 mb-2 ">
              <AiTwotonePhone className="inline-block mr-2" />
              Phone
            </div>
            <a href="tel:+996552554662">+996 552-554-662</a>
          </div>
          <div className="border border-gray-500 p-4 rounded-md bg-gray-900">
            <div className="text-gray-500 mb-2 ">
              <IoLogoWhatsapp className="inline-block mr-2 text-green-500" />
              WhatsApp
              <ImTelegram className="inline-block mr-2 ml-4 text-blue-400" />
              Telegram
            </div>
            <a>+996 500-92-36-29</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
