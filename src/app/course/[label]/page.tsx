"use client"
import { useParams } from 'next/navigation';

export default function CourseDetails() {
  const { label } = useParams();

  // Remplacer par les données réelles ou appeler une API pour récupérer les détails du cours.
  const courseDetails = {
    bash: {
      title: "Cours Bash",
      description:
        "Détails approfondis du cours Bash, comprenant des leçons pratiques sur l'automatisation des tâches.",
      price: 39,
    },
    // Ajoute d'autres cours ici (git, front-end, etc.)
  };

  const course = courseDetails[label as keyof typeof courseDetails];

  if (!course) {
    return <p>Cours non trouvé</p>;
  }

  return (
    <main>
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p>{course.description}</p>
      <p>Prix: {course.price}€</p>
      {/* Bouton de paiement ou autres fonctionnalités */}
    </main>
  );
}
