import { ClientSummary } from '../_models/client-summary';
 
export const CLIENT: ClientSummary = {
    id: 11, 
    name: "Gollum",
    location: "Middle Earth",
    occupation: "Gaurder of the precious",
    birthDate: new Date('1984-09-27:00:00:00Z'),
    score: 4,
    photo: {
        id:1,
        url: "../../assets/Image9.jpg",
        description: "Default Icon",
        dateAdded: new Date(),
        isMain: true
    }
};