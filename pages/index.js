import Head from "next/head"
import About from "../components/About"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import RealProjects from "../components/RealProjects"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Partolio</title>
        <meta name="description" content="Mamashov Beksultan " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Projects />
      <RealProjects />
      <Skills />
      <About />
    </div>
  )
}
