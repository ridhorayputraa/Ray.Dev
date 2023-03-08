type textData = {
  heading: string;
  subHeading: string;
  paragraph: string;
  paragraphAbout1: string;
  paragraphAbout2: string;
  paragraphAbout3: string;
  paragraphAbout4: string;
  paragraphAbout5: string;
}[];

type DataImg = {
  id: number;
  name: string;
  description: string;
  link: string;
  page: string;
  techStack: string;
}[];

const Text: textData = [
  {
    heading: "Ridho Ray Putra",
    subHeading: "FrontEnd Developer & UI/UX Designer",
    paragraph:
      "Hello everyone 👋 Looking for a skilled front-end developer to solve your problem? Look no further! I have the expertise and knowledge to provide you with the perfect solution.",
    paragraphAbout1:
      "My name is Ridho Ray Putra and I'm a freelance Frontend and UI/UX Designer based in the bustling city of Jakarta. At just 19 years old, I'm already passionate about all things design and am dedicated to helping businesses and individuals achieve their goals through creative and effective design solutions.",
    paragraphAbout2:
      "I have always been fascinated by the power of design to communicate ideas and create meaningful experiences. As a self-taught designer, I have spent countless hours honing my craft and perfecting my skills in frontend development, UI design, and UX design.",
    paragraphAbout3:
      " My approach to design is all about finding the perfect balance between form and function. I believe that every design should not only look beautiful but also be intuitive, user-friendly, and optimized for the best possible user experience.",
    paragraphAbout4:
      " Whether you're looking to create a stunning website, design a new mobile app, or develop a comprehensive branding strategy, I'm here to help. With my passion for design and my commitment to delivering exceptional results, I'm confident that I can help you bring your vision to life. ",
    paragraphAbout5:
      "So if you're looking for a freelance designer who can take your project to the next level, let's connect! Get in touch with me today and let's work together to create something amazing.",
  },
];

const DataImg: DataImg = [
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

export { Text, DataImg };
