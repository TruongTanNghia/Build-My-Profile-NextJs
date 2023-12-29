import { v4 as uuid } from "uuid";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "@/imports";

export const dataProject = [
  {
    id: uuid(),
    title: "Crypto Screener Application",
    summary:
      "  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    type: "Featured Project",
    img: project1,
    styles: "col-span-12",
    type: 1,
  },
  {
    id: uuid(),
    title: "NFT collection Website",
    summary:
      "  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    type: "Website Template",
    img: project2,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
  {
    id: uuid(),
    title: "Fashion Studio Website",
    summary:
      "  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    type: "Website",
    img: project3,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
  {
    id: uuid(),
    title: "React Portfolio Website",
    summary:
      "A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive.",
    link: "/",
    github: "/",
    type: "Featured Project",
    img: project4,
    styles: "col-span-12",
    type: 1,
  },
  {
    id: uuid(),
    title: "Agency Website Template",
    summary:
      "  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    type: "Website Template",
    img: project5,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
  {
    id: uuid(),
    title: "DevDreaming",
    summary:
      "  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "/",
    type: "Blog Website",
    img: project6,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
];
