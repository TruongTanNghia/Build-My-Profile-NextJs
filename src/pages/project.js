//* LIB
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//* IMPORT
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, img, title, summary, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between  rounded-3xl relative
     border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primary">
          {title}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-primaryDark">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon className="dark:text-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
      rounded-br-3xl 
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
        <span className="text-primary font-medium text-xl">{title}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold  dark:text-primaryDark">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light"
          >
            Visit Project
          </Link>

          <Link href={github} target="_blank" className="w-8">
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
            className="text-7xl mb-16 dark:text-primaryDark"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;
