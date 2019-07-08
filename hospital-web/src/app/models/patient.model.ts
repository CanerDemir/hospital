import { Disease } from "./disease.model";

export class Patient {
    id: string;
    name: string;
    surname: string;
    diseases: Disease[];

    constructor(){
        this.id = null;
        this.name = null;
        this.surname = null;
        this.diseases = [];
    }
}