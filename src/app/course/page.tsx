"use client";
import BACK from "../../assets/svg/back.svg";
import REACT from "../../assets/svg/react.svg";
import GIT from "../../assets/svg/git.svg";
import BASH from "../../assets/svg/gnubash.svg";
import FRONT from "../../assets/svg/front.svg";
import Image from "next/image";
interface CardProps {
  label: string;
  description: string;
  prix?: number;
  logo: string;
  topos: { chapitre: number; video: number; heure: number }[];
}
export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="grid group grid-rows-[fit-content_auto] h-full border-2 border-[rgb(var(--secondary))] cursor-pointer hover:border-[rgb(var(--primary))] duration-200 rounded-sm relative overflow-clip">
      <div
        id="data"
        className="relative flex flex-col row-span-1 h-fit gap-1 p-4 row-start-1 row-end-1 col-start-1 col-end-1"
      >
        <h3 className="uppercase text-xl">{props.label}</h3>
        <p className="absolute right-0 top-0 bg-[rgb(var(--secondary),0.5)] px-4 py-1 border-l-2 border-b-2 border-secondary rounded-sm font-semibold"><span className="text-primary text-2xl">{props.prix}</span> €</p>
        <p className="text-[rgb(var--foreground)]">{props.description}</p>
      </div>
      <ul className="flex items-center justify-start w-full gap-4 row-span-1 bg-[rgb(var(--secondary),0.5)] border-t-2 border-secondary px-4 py-1">
        {props.topos.map((topo, idx) => (
          <li key={idx}>{topo.chapitre} chapitres </li>
        ))}
        {props.topos.map((topo, idx) => (
          <li key={idx}>{topo.video} videos </li>
        ))}
        {props.topos.map((topo, idx) => (
          <li key={idx}>{topo.heure} heures </li>
        ))}
      </ul>
      {/* arriere plan */}
      <div className="row-start-1 overflow-hidden row-end-1 h-full col-start-1 col-end-1 z-10 top-0 w-full grid place-items-center bg-[rgb(var(--secondary),0.1)]">
        <Image
          priority
          src={props.logo}
          height={125}
          width={125}
          alt="icon"
          className="ml-auto group-hover:opacity-20 duration-200 -rotate-12 opacity-10"
        />
      </div>
    </div>
  );
};

export default function Home() {
  const COURSES = [
    {
      label: "bash",
      description:
        " Apprenez à automatiser vos tâches et à optimiser votre productivité en maîtrisant les bases et les commandes avancées du terminal Bash.",
      prix: 39,
      logo: BASH,
      topos: [
        {
          chapitre: 5,
          video: 6,
          heure: 30,
        },
      ],
    },
    {
      label: "git & github",
      description:
        "Comprenez Git en profondeur, de l’initiation au contrôle de version, jusqu'à la gestion de projets en équipe avec GitHub.",
      prix: 49,
      logo: GIT,
      topos: [
        {
          chapitre: 2,
          video: 3,
          heure: 30,
        },
      ],
    },
    {
      label: "front-end",
      description:
        "Devenez un expert en création d’interfaces web modernes et responsive grâce à ce cours complet.",
      prix: 59,
      logo: FRONT,
      topos: [
        {
          chapitre: 8,
          video: 10,
          heure: 30,
        },
      ],
    },
    {
      label: "back-end",
      description:
        "Apprenez à construire des applications robustes côté serveur avec Node.js, et à gérer les bases de données NoSQL avec MongoDB.",
      prix: 69,
      logo: BACK,
      topos: [
        {
          chapitre: 9,
          video: 12,
          heure: 30,
        },
      ],
    },
    {
      label: "react & next js",
      description:
        "Plongez dans la création de sites et d’applications web ultra performantes avec React et Next.js, deux des frameworks JavaScript les plus populaires.",
      prix: 79,
      logo: REACT,
      topos: [
        {
          chapitre: 12,
          video: 23,
          heure: 30,
        },
      ],
    },
  ];
  return (
    <main className="w-full">
      <section className="h-fit">
        {/* pub */}
        <marquee
          behavior=""
          direction=""
          className="border-b-2 h-auto py-1 h-10 border-t-2 border-[rgb(var(--secondary))]"
        >
          <p className="text-xl font-semibold text-[rgb(var(--foreground))]">
            -50% jusqu&apos;à janvier pour le premier achat !
          </p>
        </marquee>
        <div className="flex flex-col gap-4">
          {/* titre */}
          <h2 className="uppercase text-3xl">Des cours aux chox</h2>
          {/* cards */}
          <div className=" grid grid-rows-auto-fit-300 grid-cols-auto-fit-300 gap-4 w-full mx-auto">
            {/* card */}
            {COURSES.map((card, idx) => (
              <Card
                key={idx}
                label={card.label}
                description={card.description}
                prix={card.prix}
                logo={card.logo}
                topos={card.topos}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
