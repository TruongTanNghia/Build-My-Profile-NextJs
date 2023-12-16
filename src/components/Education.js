import React from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { dataEducation } from "@/dummy/Education";

const Details = ({ type, time, place, info, reference }) => {
  return (
    <li
      ref={reference}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={reference} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-primaryDark">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 ">
          {time} | {place}
        </span>
        <p className="font-medium w-full ">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = ({ educationData }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 mt-30 w-full text-center dark:text-primaryDark">
          Education
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative ">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {dataEducation.map((edu, id) => (
              <Details
                key={id}
                type={edu.type}
                time={edu.time}
                place={edu.place}
                info={edu.info}
                reference={ref}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
