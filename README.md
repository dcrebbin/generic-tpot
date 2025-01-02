# Generic "tpot" generator

Parody site for the tech twitter subculture known as "tpot" (this part of twitter): specifically in the field of ML/AI.

![](/example.png)

Notes:

- Personas are stored in `/src/app/personas.ts`

- Avatars are stored within `/public/personas/` and handled with the `pfp` object array within `personas.ts`

- Everything is generated with either Claude Sonnet 3.5 or GPT4o

prompt example:

```
generate a persona and blog about ml from a pseudo-intellectual perspective and uses words like "musings, p value, cracked, agi" and esoteric maths terminology to describe things. use the following structure:

name: "",
subtitle: "",
articleTitle: "",
articleSubtitle: "",
articles: [
    {
    title: "",
    body: ``,
    }]
```

### Setup

1. npm i

2. npm run dev
