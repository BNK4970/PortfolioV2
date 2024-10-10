import BASH from "../../assets/svg/gnubash.svg"
import FRONT from "../../assets/svg/front.svg"
import GIT from "../../assets/svg/git.svg"
import BACK from "../../assets/svg/back.svg"
import REACT from "../../assets/svg/react.svg"

export const COURSES = [
    {
      id:1,
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
      id:2,
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
      id:3,
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
      id:4,
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
      id:5,
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



  export const ALL_COURSES = {
    1: {
      title: "Bash",
      description: "Apprenez à automatiser vos tâches et à optimiser votre productivité en maîtrisant les bases et les commandes avancées du terminal Bash.",
      price: 39,
      logo: BASH, // Référence au logo
      topos: [
        4,6,30
      ]
    },
    2: {
      title: "Git & GitHub",
      description: "Comprenez Git en profondeur, de l’initiation au contrôle de version, jusqu'à la gestion de projets en équipe avec GitHub.",
      price: 49,
      logo: GIT,
      topos: [
        2,3,30
      ]
    },
    3: {
      title: "Front-End",
      description: "Devenez un expert en création d’interfaces web modernes et responsive grâce à ce cours complet.",
      price: 59,
      logo: FRONT,
      topos: [
        8,10,30
      ]
    },
    4: {
      title: "Back-End",
      description: "Apprenez à construire des applications robustes côté serveur avec Node.js, et à gérer les bases de données NoSQL avec MongoDB.",
      price: 69,
      logo: BACK,
      topos: [
        9,12,30
      ]
    },
    5: {
      title: "React & Next.js",
      description: "Plongez dans la création de sites et d’applications web ultra performantes avec React et Next.js, deux des frameworks JavaScript les plus populaires.",
      price: 79,
      logo: REACT,
      topos: [
        12,23,30
      ]
    }
  };