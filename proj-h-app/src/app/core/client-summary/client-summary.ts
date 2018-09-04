
export enum Score {
    Terible = 0,
    Bad = 1,
    Average = 2,
    Good = 3,
    Amazballz = 4
}

export class ClientSummary {
    id: number;
    name: string;
    location: string;
    occupation: string;
    birthDate: Date;
    score: Score;
  }
