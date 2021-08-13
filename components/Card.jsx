import Image from "next/image"
import styles from "../styles/Card.module.css"
import { DiGithubBadge } from "react-icons/di"

const Card = ({ stacks, url, codeSrc, imgUrl, title }) => {
  return (
    <div className={`${styles.cardContainer} rounded-md text-white `}>
      <div className={`${styles.content} ${styles.front}`}>
        <Image className="rounded-md" src={imgUrl} width="600" height="300" />
      </div>

      <div
        className={`${styles.content} ${styles.back} flex flex-col items-center bg-gray-800 rounded-md`}
      >
        <h2 className=" text-2xl capitalize border-b-2 border-yellow-300 py-4">
          {title}
        </h2>
        <h2 className="my-4">Stacks</h2>
        <div className={`${styles.tags} text-red-700 flex flex-1 flex-wrap`}>
          {stacks.map((stack, index) => (
            <div key={index} className={`${styles.tag}`}>
              {stack}
            </div>
          ))}
        </div>
        <div className="mb-4 flex justify-between w-2/5">
          <button className={`${styles.btn}`}>
            <a href={codeSrc} target="_blank" className="flex items-center">
              <DiGithubBadge className=" mr-2" size="1.5rem" />
              Code
            </a>
          </button>
          <button className={styles.btn}>
            <a href={url} target="_blank">
              Source
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
