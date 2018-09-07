import { Photo } from "./photo";

export interface ClientSummary {
    id: number;
    name: string;
    location: string;
    occupation: string;
    birthDate: Date;
    score: number;
    photo: Photo;
  }
