import { useEffect } from "react"
import styles from "../styles/Hero.module.css"
import Navbar from "./Navbar"
import Typical from "react-typical"

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className=" flex items-center h-4/5 w-4/5 mx-auto">
        <div className="text-5xl text-white capitalize font-bold tracking-wide">
          welcome to <br />
          <Typical steps={["my personal portfolio"]} loop={"no"} wrapper="p" />
        </div>
      </div>
    </div>
  )
}

export default Hero
