import SPOTIFY from "../../public/assets/projects/spotify/spotify.png";
import MEME from "../../public/assets/projects/memeMaker/memeMaker.png";
import TWITTER from "../../public/assets/projects/twitter/twitter.png";
import CONTROLE from "../../public/assets/projects/control/controle.png";
import HTML from "../../public/assets/icons/html.svg";
import JS from "../../public/assets/icons/javascript.svg";
import CSS from "../../public/assets/icons/css.svg";
import REACT from "../../public/assets/icons/react.svg";
import TYPE from "../../public/assets/icons/typescript.svg";
import NEXT from "../../public/assets/icons/next-js.svg";

const projectsPersonal = [
  {
    id: 1,
    img: SPOTIFY,
    title: "Clone Spotify",
    github: "https://github.com/MariaClaraAmorim/spotify-clone",
    web: "https://spotify-clone-iota-henna.vercel.app/",
    description: "Clonagem da plataforma de música spotify",
    tags: [
      {
        name: "Html",
        icon: HTML,
      },
      {
        name: "Css",
        icon: CSS,
      },
      {
        name: "Javascript",
        icon: JS,
      },
      {
        name: "TypeScript",
        icon: TYPE,
      },
    ],
  },

  {
    id: 2,
    img: MEME,
    title: "Meme Maker",
    web: "https://meme-generator-coral-six.vercel.app/",
    description:
      "Aplicativo para criação de memes, API: https://imgflip.com/api",
    tags: [
      {
        name: "React Js",
        icon: REACT,
      },
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "TypeScript",
        icon: TYPE,
      },
      {
        name: "Css",
        icon: CSS,
      },
    ],
  },

  {
    id: 3,
    img: TWITTER,
    title: "Twitter",
    web: "https://clone-twitter-tawny.vercel.app/",
    github: "https://github.com/MariaClaraAmorim/clone-twitter",
    description: "Clonagem da rede social Twitter",
    tags: [
      {
        name: "React Js",
        icon: REACT,
      },
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "TypeScript",
        icon: TYPE,
      },
      {
        name: "Css",
        icon: CSS,
      },
      {
        name: "Next",
        icon: NEXT,
      },
    ],
  },
  {
    id: 4,
    img: CONTROLE,
    title: "Twitter",
    web: "https://gerenciador-project.vercel.app/",
    github: "https://github.com/MariaClaraAmorim/gerenciador-project",
    description: "Web site para controle de finanças",
    tags: [
      {
        name: "React Js",
        icon: REACT,
      },
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "html",
        icon: HTML,
      },
      {
        name: "Css",
        icon: CSS,
      },
    ],
  },
];

export default projectsPersonal;
