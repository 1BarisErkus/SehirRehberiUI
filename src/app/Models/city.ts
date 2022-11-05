import { Photo } from "./photo";

export class City{
    id:number = 0;
    name: string = "";
    description: string = "";
    userId: string = "";
    photos: Photo[] = [];
}