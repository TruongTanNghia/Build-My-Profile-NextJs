//* LIB
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

//* IMPORT
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { dataProject } from "@/dummy/Projects";

const FramerImage = motion(Image);
console.log(dataProject);
const FeaturedProject = ({ type, img, title, summary, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between  rounded-3xl relative
     border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primary xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-primaryDark sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon className="dark:text-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, img, title, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
      rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold  dark:text-primaryDark lg:text-2xl">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}

        <div className="w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light md:text-base"
          >
            Visit Project
          </Link>

          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className="dark:text-light" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const project = () => {
  return (
    <>
      <Head>
        <title>Tan-Nghia-Profile | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge! "
            className="text-7xl mb-16 dark:text-primaryDark lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div
            className={`grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0`}
          >
            {dataProject.map((project) => (
              <div key={project.id} className={project.styles}>
                {project.type === 1 ? (
                  <FeaturedProject
                    title={project.title}
                    summary={project.summary}
                    link={project.link}
                    github={project.github}
                    img={project.img}
                  />
                ) : (
                  <Project
                    title={project.title}
                    summary={project.summary}
                    link={project.link}
                    github={project.github}
                    img={project.img}
                  />
                )}
                {project.type !== undefined && (
                  <p style={{ display: "none" }}>{project.type}</p>
                )}
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;
