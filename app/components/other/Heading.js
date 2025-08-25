"use client";

import { useContext } from "react";
import { SalonContext } from "@/app/context/SalonContext";

const Heading = ({ Text }) => {
  const { theme } = useContext(SalonContext);

  return (
    <h2
      className={`text-4xl md:text-4xl font-semibold leading-snug mb-2 ${
        theme ? "text-white" : "text-teal-900"
      }`}
    >
      {Text}
    </h2>
  );
};

export default Heading;
