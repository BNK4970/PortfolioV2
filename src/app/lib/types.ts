
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
    hours: number
}