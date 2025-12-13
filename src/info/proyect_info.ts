
export type TSlideProyect = {
  id: number;
  title: string;
  description: string;
  image: string;
  linkgit: string;
  linkweb: string;
}

import imag1 from "../info/task_management_baner.jpg"
import imag2 from "../info/tradiscionCriolla_baner.jpg"
import imag3 from "../info/wlr_shopeer.jpg"
import imag4 from "../info/tiendita_backend.jpg"

export const slidesData: TSlideProyect[] = [
  {
    id: 1,
    title: 'Proyecto: Task Manegement',
    description: 'Proyecto de tablero de kanban, con: React, Ts, Tailwiond',
    image: imag1,
    linkgit: "",
    linkweb: "",
  },
  {
    id: 2,
    title: 'Proyecto: Tradicion Ciolla',
    description: 'Aplicación front-end & back-end de E-commerce, con: js, node.js, express, MySQL, css, html',
    image: imag2,
    linkgit: "",
    linkweb: "",
  },
  {
    id: 3,
    title: 'Proyecto: Wl`r Shopeer',
    description: 'Aplicación front-end de E-commerce, con: React.js, react-router, mockAPI, Bootstrap',
    image: imag3,
    linkgit: "",
    linkweb: "",
  },
  {
    id: 3,
    title: 'Proyecto: Tiendita API',
    description: 'Aplicación back-end de E-commerce, con: Node.js, Express, TypeScript, MySQL, JWT y Swagger UI',
    image: imag4,
    linkgit: "https://github.com/amarrero86mr/tiendita-backend.git",
    linkweb: "https://tiendita-backend-snowy.vercel.app/",
  },
];