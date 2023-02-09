import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaAws, FaGitAlt, FaVuejs } from "react-icons/fa";
import { SiAmazon, SiBootstrap, SiDjango, SiExpress, SiMaterialui, SiPostgresql, SiPython, SiReactrouter, SiTrello, SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

export const stackData = [
  { title: "React",img: imgReact },
  { title: "JS", img: imgJS },
  { title: "TypeScript", img: SiTypescript },
  { title: "HTML", img: imgHTML},
  { title: "CSS", img: imgCSS },
  { title: "Python", img: SiPython },
  { title: "Node JS",img: imgNode },
  { title: "Docker", img: FaDocker },
  { title: "Django", img: SiDjango },
  { title: "AWS", img: FaAws },
  { title: "Git", img: FaGitAlt },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Styled Components", img: imgStyled },
  { title: "Bootstrap", img: SiBootstrap },
  { title: "Material UI", img: SiMaterialui },
  { title: "Trello", img: SiTrello },
  { title: "Express.js", img: SiExpress },
  { title: "React Router Dom v5 e v6", img: SiReactrouter },
  { title: "Amazon aws", img: SiAmazon },
];
