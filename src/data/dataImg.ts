type DataImg = {
  id: number;
  name: string;
  description: string;
  link: string;
  page: string;
  techStack: string;
}[];

export const DataImg: DataImg = [
  {
    id: 1,
    name: "Aspirasiku",
    description:
      "This is Aspirasiku, Aspirasiku is a platform for sharing what you thought",
    link: "/aspirasiku",
    page: "https://aspirasikuu.000webhostapp.com/",
    techStack: "Laravel, Mysql, Bootsrap",
  },
  {
    id: 2,
    name: "Movieeflixx",
    description: "Movies app With authentication (Netflix Clone)",
    link: "/Movie",
    page: "https://movieeflixx.netlify.app/",
    techStack: "React, Redux, Firebase, Tailwinds",
  },
  {
    id: 3,
    name: "TypoTyping",
    description:
      "Typo Typing, the ultimate web application for honing your typing skills!",
    link: "/typotyping",
    page: "https://typo-typing.vercel.app/",
    techStack: "React, TS, Tailwindcss",
  },
  {
    id: 4,
    name: "Anim.Me",
    description: "Landing Page streaming anime website",
    link: "/anime",
    page: "https://anim-me.vercel.app/",
    techStack: "HTML & Vanilla Css",
  },
];
