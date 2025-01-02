import Image from "next/image";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { forumlae, personas } from "./personas/personas";

export default function Home() {
  const randomPersona = personas[Math.floor(Math.random() * personas.length)];

  const isDarkMode = Math.random() > 0.5;
  const useGreenText = Math.random() > 0.5;
  const useMaths = Math.random() > 0.5;

  function getRandomFont() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return "font-mono";
    } else if (random === 1) {
      return "font-sans";
    } else {
      return "font-serif";
    }
  }

  return (
    <div
      className={`px-40 ${
        isDarkMode ? "bg-black text-white" : "bg-white min-h-screen text-black"
      } ${getRandomFont()}`}
    >
      <h1 className="text-4xl font-bold">{randomPersona.name}</h1>
      <h2 className="text-xl">{randomPersona.subtitle}</h2>
      <Image src={randomPersona.image} alt="logo" width={200} height={200} />
      <ul className="flex flex-row gap-4">
        <li>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/mlanon"
          >
            • github
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 hover:underline"
            href="https://x.com/mlanon"
          >
            • x
          </a>
        </li>
      </ul>
      <br></br>
      <h3 className="text-2xl font-bold">
        {useGreenText ? ">" : ""} {randomPersona.articleTitle}
      </h3>
      <h4 className="text-xl">
        {useGreenText ? ">" : ""} {randomPersona.articleSubtitle}
      </h4>
      <br></br>
      {randomPersona.articles.map((article, index) => (
        <div
          key={index}
          className="flex flex-col justify-start font-mono items-start gap-4"
        >
          <h5 className="text-lg font-bold">{article.title}</h5>
          <p>{article.body}</p>
          {useMaths && (
            <BlockMath
              math={forumlae[Math.floor(Math.random() * forumlae.length)]}
            />
          )}
        </div>
      ))}
    </div>
  );
}
