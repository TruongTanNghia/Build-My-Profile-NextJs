import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">about</Link>
          <Link href="/project">project</Link>
          <Link href="/articles">articles</Link>
        </nav>
        <h2>Logo</h2>
        <nav>
          <Link href="/" target={"_blank"}>
            T
          </Link>
          <Link href="/" target={"_blank"}>
            T
          </Link>
          <Link href="/" target={"_blank"}>
            T
          </Link>
          <Link href="/" target={"_blank"}>
            T
          </Link>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
