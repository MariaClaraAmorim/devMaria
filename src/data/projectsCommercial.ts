import CHAMADOS from "../../public/assets/projects/suporte/suporte.png";
import BIKES from "../../public/assets/projects/dantas/dantasbikes.png";
import REDES from "../../public/assets/projects/meninaRedes/meninaRedes.png";
import HTML from "../../public/assets/icons/html.svg";
import JS from "../../public/assets/icons/javascript.svg";
import CSS from "../../public/assets/icons/css.svg";
import REACT from "../../public/assets/icons/react.svg";
import TYPE from "../../public/assets/icons/typescript.svg";
import NEXT from "../../public/assets/icons/next-js.svg";

const projectsCommercial = [
  {
    id: 1,
    img: CHAMADOS,
    title: "Sistema de chamados",
    web: "",
    description:
      "Este é o sistema de chamados desenvolvido para a empresa Dantas Eletro. Feito para atender as demandas internas da empresa",
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
    ],
  },

  {
    id: 2,
    img: BIKES,
    title: "Ecommerce Dantas Bikes",
    web: "https://dantasbikes.com.br/",
    description:
      "Este é um site completo de comércio eletrônico para venda de bicicletas e acessórios para bicicletas. Desenvolvido por mim e uma equipe formada de desenvolvedores frontend e backend para a empresa Dantas Bikes",
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
        name: "Next js",
        icon: NEXT,
      },
    ],
  },

  {
    id: 3,
    img: REDES,
    title: "Portfolio menina de redes",
    web: "https://meninaderedes.bohr.io/",
    description: "Portfolio desenvolvido para uma cliente",
    tags: [
      {
        name: "Html",
        icon: HTML,
      },
      {
        name: "Css",
        icon: CSS,
      },
    ],
  },
];

export default projectsCommercial;
