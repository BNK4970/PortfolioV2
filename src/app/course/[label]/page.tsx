"use client";
import { useParams } from "next/navigation";
import { ALL_COURSES } from "@/app/lib/data";

interface CardProps {
  title: string;
  level: "junior" | "intermédiaire" | "sénior";
  description: string;
  time: number;
}
export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col border-2 border-secondary rounded-sm p-4">
      <div>
        <i>icon</i>
        <span>{props.level}</span>
      </div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div>
        <span>{props.time}</span>
      </div>
    </div>
  );
};

export default function CourseDetails() {
  const { label } = useParams();

  const course = ALL_COURSES[label as keyof typeof ALL_COURSES];

  console.log(course);

  if (!course) {
    return <main>Cours non trouvé</main>;
  }
const modules = [1,2,3,4,5];
  return (
    <main>
      <div className="py-20">
        <h1 className="text-3xl uppercase">{course.title}</h1>
      </div>
      <h2 className="text-xl">Découvrir {course.title} avec des modules</h2>
      <div className="grid grid-rows-auto-fit-300 grid-cols-auto-fit-300 gap-4">
        {modules.map((module,idx)=>(
          <Card key={idx} title="titre" description="description" level="junior" time={50}/>
        ))}
      </div>
      <p>{course.description}</p>
      <span>{course.price}</span>
      <ul className="flex items-center gap-4">
        {course.topos.map((topo, idx) => (
          <li key={idx}>{topo}</li>
        ))}
      </ul>
    </main>
  );
}
