/* eslint-disable react/no-unescaped-entities */
//* LIBRARIES
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

//* Import Components
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { profilePic } from "@/imports";
import { DataAbount } from "@/dummy/About";

const About = () => {
  const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

    return <span ref={ref}></span>;
  };
  return (
    <>
      <Head>
        <title>Tan-Nghia-Profile | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-between dark:text-light ">
        <Layout className="pt-12">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-8xl mb-14 dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Hi, I am Tan Nghia
              </h2>
              {DataAbount.map((data, id) => (
                <p key={id} className=" my-2 font-medium">
                  {data.type}
                </p>
              ))}
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl 
            border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4
            md:order-1 md:col-span-8 "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="TanNghia"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between mr-[20px] xl:col-span-8 xl:flex-row xl:items-center md:order-3  ">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} /> +
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg 
                sm:text-base xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={40} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg 
                sm:text-base xs:text-sm"
                >
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={3} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg 
                sm:text-base xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
