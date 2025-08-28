"use client";

const Heading = ({ Text }) => {

  return (
    <h2
      className={`text-4xl md:text-4xl font-semibold leading-snug mb-2 mainColor`}
    >
      {Text}
    </h2>
  );
};

export default Heading;
