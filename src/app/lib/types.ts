// cours
export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  logo: string;
  topos: Topos[];
}
export interface Topos {
  chapters: number;
  videos: string;
  hours: number;
}

// card
export interface CardProps {
  id: number;
  label: string;
  description: string;
  prix?: number;
  logo: string;
  topos: { chapitre: number; video: number; heure: number }[];
}
