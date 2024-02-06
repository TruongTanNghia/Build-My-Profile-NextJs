import { v4 as uuid } from "uuid";
import {
  articles_Python,
  certificate_C,
  certificate_DataStructureAndAlgorithms,
  certificate_JavaScript,
  certificate_BasicAlgorithms,
  certificate_CPlus,
  certificate_SQL,
  certificate_CLOUD,
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
  {
    id: uuid(),
    title: "Cloud Essentials",
    summary:
      "The Cloud Essentials course provides an overview of cloud computing. This course includes architecture, requirements, basic techniques and instructions on how to create applications and reports for objects. In addition, the course will introduce AWS, applications, security, Web API and services, etc. At the end of the course, you can practice and deepen your knowledge by doing the revision exercises.",
    time: "Codelearn",
    link: "https://codelearn.io/lms/share/7a3a7240-9077-420c-9e54-6dbcf4760c44",
    img: certificate_CLOUD,
  },
  {
    id: uuid(),
    title: "C++ for Beginners",
    summary:
      "Particularly important role of the two programming languages ​​C and C++ is for basic programming learning. Because this is a middle-level programming language. Most information technology training schools in Vietnam use these two languages ​​as their basic subjects.",
    time: "Codelearn",
    link: "https://codelearn.io/lms/share/20646434-833d-4c26-830a-bf5554274269",
    img: certificate_CPlus,
  },
  {
    id: uuid(),
    title: "PostgreSQL Basics",
    summary:
      "SQL is a database computer language designed for the retrieval and management of data in a relational database. SQL stands for Structured Query Language. This tutorial will give you a quick start to SQL. It covers most of the topics required for a basic understanding of SQL and to get a feel of how it works.",
    time: "Codelearn",
    link: "https://codelearn.io/lms/share/9f43a55d-e02a-4cee-8f0d-d585a3da2970",
    img: certificate_SQL,
  },
];
