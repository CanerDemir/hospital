import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { DrugApi } from "../app-gateway";

@Injectable({
    providedIn: "root"
})
export class DrugService {
    constructor(private httpClient: HttpClient){}

    getDrug(id){
        return this.httpClient.get(DrugApi.getDrug + id).pipe();
    }

    getDrugList(){
        return this.httpClient.get(DrugApi.getDrugList).pipe();
    }

    saveDrug(drug){
        return this.httpClient.post(DrugApi.saveDrug, drug).pipe();
    }
}