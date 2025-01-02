"use client";

import Image from "next/image";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { forumlae, personas, pfp } from "./personas/personas";

export default function Home() {
  const randomPersona = personas[Math.floor(Math.random() * personas.length)];
  const randomPfp = pfp[Math.floor(Math.random() * pfp.length)];
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
      className={`min-h-[100vh] p-10 px-40 lg:px-80 ${
        isDarkMode ? "bg-black text-white" : "bg-white  text-black"
      } ${getRandomFont()}`}
    >
      <h1 className="text-4xl font-bold">{randomPersona.name}</h1>
      <h2 className="text-xl">{randomPersona.subtitle}</h2>
      <Image src={randomPfp} alt="logo" width={200} height={200} />
      <ul className="flex flex-row gap-4">
        <li>
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/"
          >
            • github
          </a>
        </li>
        <li>
          <a className="text-blue-700 hover:underline" href="https://x.com/">
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
          <br></br>
        </div>
      ))}
      <footer className="text-center text-sm pt-10">
        Copyright © 2025 {randomPersona.name}
      </footer>
    </div>
  );
}
