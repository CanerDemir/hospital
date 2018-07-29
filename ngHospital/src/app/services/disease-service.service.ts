import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { DiseaseApi } from "../app-gateway";

@Injectable({
    providedIn: "root"
})
export class DiseaseService {
    constructor(private httpClient: HttpClient){}

    getDisease(id){
        return this.httpClient.get(DiseaseApi.getDisease + id).pipe();
    }

    getDiseaseList(){
        return this.httpClient.get(DiseaseApi.getDiseaseList).pipe();
    }

    saveDisease(disease){
        return this.httpClient.get(DiseaseApi.saveDisease, disease).pipe();
    }
}