import React from "react";
interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  const ABOUT = [
    {
      date: 2024,
      title: "BAC STI2D SIN",
      description:
        "Obtention du BAC de la filière technologie STI2D option SIN.",
    },
    {
      date: 2026,
      title: "BUT Informatique",
      description: "Obtention du BUT informatique option A.",
    },
  ];
  return (
    <React.Fragment>
      <h1>A propos de moi</h1>
      <ul
        className={`max-w-4/6 mx-auto h-fit relative grid grid-cols-2 grid-rows-[repeat(${ABOUT.length.toString()})] gap-10 before:content-['] before:absolute before:bg-[rgb(var(--primary))] before:w-3 before:h-full before:rounded-full before:left-1/2 before:-translate-x-1/2`}
      >
        {ABOUT.map((list, idx) => (
          <li
            key={idx}
            className="w-full h-fit p-2 rounded-md border-2 border-[rgb(var(--secondary))] bg-[rgb(var(--secondary),0.6)] flex flex-col gap-1 col-span-1 col-start-1 even:col-start-1 even:bg-[rgb(var(--blur))] even:translate-x-full even:ml-10"
          >
            <span>{list.date}</span>
            <h2 className="text-nowrap">{list.title}</h2>
            <p>{list.description}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default About;
