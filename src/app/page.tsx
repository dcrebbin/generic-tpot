"use client";

import Image from "next/image";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { forumlae, personas, pfp } from "./personas/personas";
import { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [randomState] = useState(() => ({
    persona: personas[Math.floor(Math.random() * personas.length)],
    pfp: pfp[Math.floor(Math.random() * pfp.length)],
    isDarkMode: Math.random() > 0.5,
    useGreenText: Math.random() > 0.5,
    useMaths: Math.random() > 0.5,
    font: (() => {
      const random = Math.floor(Math.random() * 3);
      if (random === 0) return "font-mono";
      if (random === 1) return "font-sans";
      return "font-serif";
    })(),
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="min-h-[100vh] p-10 px-40 lg:px-80">Loading...</div>;
  }

  return (
    <div
      className={`min-h-[100vh] p-10 px-40 lg:px-80 ${
        randomState.isDarkMode ? "bg-black text-white" : "bg-white  text-black"
      } ${randomState.font}`}
    >
      <h1 className="text-4xl font-bold">{randomState.persona.name}</h1>
      <h2 className="text-xl">{randomState.persona.subtitle}</h2>
      <Image src={randomState.pfp} alt="logo" width={200} height={200} />
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
        {randomState.useGreenText ? ">" : ""} {randomState.persona.articleTitle}
      </h3>
      <h4 className="text-xl">
        {randomState.useGreenText ? ">" : ""}{" "}
        {randomState.persona.articleSubtitle}
      </h4>
      <br></br>
      {randomState.persona.articles.map((article, index) => (
        <div
          key={index}
          className="flex flex-col justify-start font-mono items-start gap-4"
        >
          <h5 className="text-lg font-bold">{article.title}</h5>
          <p>{article.body}</p>
          {randomState.useMaths && (
            <BlockMath
              math={forumlae[Math.floor(Math.random() * forumlae.length)]}
            />
          )}
          <br></br>
        </div>
      ))}
      <footer className="text-center text-sm pt-10">
        Copyright © 2025 {randomState.persona.name}
      </footer>
    </div>
  );
}
