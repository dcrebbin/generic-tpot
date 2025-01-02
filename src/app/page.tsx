"use client";

import Image from "next/image";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import {
  bookRecs,
  forumlae,
  interests,
  personas,
  pfp,
} from "./personas/personas";
import { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [randomState] = useState(() => ({
    persona: personas[Math.floor(Math.random() * personas.length)],
    pfp: pfp[Math.floor(Math.random() * pfp.length)],
    isDarkMode: Math.random() > 0.5,
    useGreenText: Math.random() > 0.5,
    useSanta: Math.random() > 0.8,
    useGlasses: Math.random() > 0.8,
    useMaths: Math.random() > 0.5,
    bookRec: bookRecs[Math.floor(Math.random() * bookRecs.length)],
    interests: (() => {
      const randomInterests = new Set();
      while (randomInterests.size < 3) {
        const random = Math.floor(Math.random() * interests.length);
        randomInterests.add(interests[random]);
      }
      return Array.from(randomInterests);
    })(),
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
      className={`min-h-[100vh] p-10 px-10 lg:px-40 xl:px-80 w-full ${
        randomState.isDarkMode ? "bg-black text-white" : "bg-white  text-black"
      } ${randomState.font} ${
        randomState.persona.name == "neural net bogan" ? "rotate-180" : ""
      }`}
    >
      <h1 className="text-4xl font-bold">{randomState.persona.name}</h1>
      <h2 className="text-xl">{randomState.persona.subtitle}</h2>
      <div className="relative mt-10">
        {randomState.useGlasses && (
          <Image
            className={`absolute ${randomState.pfp.glassesPos}`}
            src="/addons/glasses.png"
            alt="logo"
            width={200}
            height={200}
          />
        )}
        {randomState.useSanta && (
          <Image
            className={`absolute ${randomState.pfp.santaPos}`}
            src="/addons/santa.png"
            alt="logo"
            width={200}
            height={200}
          />
        )}
        <Image
          src={`/personas/${randomState.pfp.name}.png`}
          alt="logo"
          width={200}
          height={200}
        />
      </div>
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
      interests: {randomState.interests.join(" | ")}
      <br></br>
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
      <h3>book recommendation (referral)</h3>
      <br></br>
      <a
        className="text-blue-700 hover:underline"
        href={randomState.bookRec.link}
      >
        {randomState.bookRec.name}
      </a>
      <p>{randomState.bookRec.review}</p>
      <footer className="text-center text-sm pt-10">
        Copyright © 2025 {randomState.persona.name}
        <br></br>
        <a
          className="text-blue-700 hover:underline"
          href="https://github.com/dcrebbin/generic-tpot"
        >
          source code
        </a>
      </footer>
    </div>
  );
}
