import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  Facebook,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block inline-2 bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light ">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 text-[15px] " />
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
            href="https://github.com/TruongTanNghia"
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
            href="https://www.linkedin.com/in/ngh%C4%A9a-tr%C6%B0%C6%A1ng-t%E1%BA%A5n-7b94b52a5/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-5"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.pinterest.com/tannghiaxp"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 ml-5"
          >
            <PinterestIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-7 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
