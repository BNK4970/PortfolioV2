import Button from "@/components/CTA/Button";
import DB from "../../assets/svg/database.svg";
import REACT from "../../assets/svg/react.svg";
import NEXT from "../../assets/svg/nextdotjs.svg";
import GIT from "../../assets/svg/git.svg";
import BASH from "../../assets/svg/gnubash.svg";
import BLEND from "../../assets/svg/blend.svg";
import Image from "next/image";
interface CardProps {
  label: string;
  description: string;
  prix: number;
  logo: string;
}
export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="grid grid-rows-[1fr_auto] gap-4 outline outline-2 outline-[rgb(var(--secondary))] rounded-md p-4 relative overflow-clip">
      <div className="flex flex-col row-span-1 gap-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="uppercase text-xl">{props.label}</h3>
          <span className="font-semibold text-xl text-[rgb(var(--primary))]">{props.prix}€</span>
        </div>
        <p className="text-[rgb(var--foreground)]">{props.description}</p>
      </div>
      <div className="flex items-center justify-start w-full gap-4 row-span-1">
        {/* <Button variant="solid" color="secondary" radius="md">
          Afficher plus
        </Button> */}
        <Button variant="solid" color="primary" radius="md">
          Acheter
        </Button>
      </div>
      <div className="absolute -z-10 top-0 w-full h-full grid place-items-center bg-[rgb(var(--secondary),0.3)]">
        <Image
          priority
          src={props.logo}
          height="200"
          width="200"
          alt=""
          className="ml-auto -rotate-12 opacity-30"
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
    },
    {
      label: "git & github",
      description:
        "Comprenez Git en profondeur, de l’initiation au contrôle de version, jusqu'à la gestion de projets en équipe avec GitHub.",
      prix: 49,
      logo: GIT,
    },
    {
      label: "front-end",
      description:
        "Devenez un expert en création d’interfaces web modernes et responsive grâce à ce cours complet.",
      prix: 59,
      logo: BLEND,
    },
    {
      label: "back-end",
      description:
        "Apprenez à construire des applications robustes côté serveur avec Node.js, et à gérer les bases de données NoSQL avec MongoDB.",
      prix: 69,
      logo: DB,
    },
    {
      label: "react & next js",
      description:
        "Plongez dans la création de sites et d’applications web ultra performantes avec React et Next.js, deux des frameworks JavaScript les plus populaires.",
      prix: 79,
      logo: REACT,
    },
  ];
  return (
    <main className="w-full">
      <section>
        <marquee
          behavior=""
          direction=""
          className="border-b-2 border-t-2 border-[rgb(var(--secondary))] mb-4"
        >
          <p className="text-xl font-semibold text-[rgb(var(--foreground))]">
            -50% jusqu&apos;à janvier pour le premier achat !
          </p>
        </marquee>
        <h2 className="uppercase text-3xl">Des cours au choix à disposition</h2>
        <div className=" grid grid-cols-1 gap-4 py-4">
          {COURSES.map((card, idx) => (
            <Card
              key={idx}
              label={card.label}
              description={card.description}
              prix={card.prix}
              logo={card.logo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
