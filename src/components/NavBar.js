import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  Facebook,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block inline-2 bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const NavBar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 text-[15px]" />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4 text-[15px]"
          />
          <CustomLink
            href="/project"
            title="Project"
            className="mx-4 text-[15px]"
          />
          <CustomLink
            href="/articles"
            title="Articles"
            className="ml-4 text-[15px]"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.facebook.com/tannghiaaaa/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-5"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/tannghiaaaa/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-5"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/tannghiaaaa/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-5"
          >
            <Facebook />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/tannghiaaaa/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-5"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/tannghiaaaa/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 ml-5"
          >
            <PinterestIcon />
          </motion.a>
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
