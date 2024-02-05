import { v4 as uuid } from "uuid";
import {
  articles_Python,
  certificate_C,
  certificate_DataStructureAndAlgorithms,
  certificate_JavaScript,
  certificate_BasicAlgorithms,
} from "@/imports";

export const DataCertificate = [
  {
    id: uuid(),
    title: "C for Beginners",
    summary:
      "The C language is not only popular in writing applications. It is also a very effective language for writing system software. Originally developed by Dennis Ritchie to develop the UNIX programming system at Bell Labs. Large operating systems Windows, Linux, ... are influenced by the C language.",
    time: "Codelearn",
    link: "https://codelearn.io/lms/share/c380027b-f7d7-4035-a37b-41855895ed92",
    img: certificate_C,
  },
  {
    id: uuid(),
    title: "Python Fundamentals",
    summary:
      "Python is a high-level language, interpreter, interactive scripting language and object-oriented. Python is designed to make it easier for programmers to read and understand. Python rewards using English keywords while other languages ​​often use punctuation. Its syntax structure is also easier than that of other languages. Python is easy to learn because related documents can be found anywhere.",
    time: "Codelearn",
    link: "/https://codelearn.io/lms/share/34e4598a-f40c-4335-9db4-102cc8875932",
    img: articles_Python,
  },
  {
    id: uuid(),
    title: "Data Structure And Algorithms",
    summary:
      "I hold a range of certificates, symbolizing my commitment to ongoing learning and skill development. These certifications validate my expertise and reflect my dedication to staying abreast of industry trends. Each certificate marks a milestone, showcasing my proficiency in various domains. These achievements underscore my passion for excellence and readiness to contribute effectively in diverse professional settings",
    time: "Codelearn",
    link: "https://codelearn.io/lms/share/dcc7c6e1-e6ea-46c6-9f5c-1b71c1c9dbb6",
    img: certificate_BasicAlgorithms,
  },
  {
    id: uuid(),
    title: "JavaScript Basics",
    summary:
      "JavaScript is a programming language that adds interactivity to your website (for example games, responses when buttons are pressed or data is entered in forms, dynamic styling, andanimation). This article helps you get started with this exciting language and gives you an idea of what is possible.",
    time: "Codelearn",
    link: "https://codelearn.io/lms/share/147b7d3b-6b90-4682-a425-c5b2bee3b0f4",
    img: certificate_JavaScript,
  },
  {
    id: uuid(),
    title: "Basic Algorithms",
    summary:
      "Algorithms is a finite set of instructions to be executed in a certain order to get the desired result. In general, the algorithm is independent of programming languages, ie an algorithm can be deployed in many different programming languages.",
    time: "Codelearn",
    link: "https://codelearn.io/lms/share/769d9b1d-6fa8-4b01-8fa8-fc8f3447eb9a",
    img: certificate_DataStructureAndAlgorithms,
  },
];
