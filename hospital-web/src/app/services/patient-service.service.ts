import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PatientApi } from "../app-gateway";

@Injectable({
    providedIn: "root"
})
export class PatientService {
    constructor(private httpClient: HttpClient){}

    getPatient(id){
        return this.httpClient.get(PatientApi.getPatient + id).pipe();
    }

    getPatientList(){
        return this.httpClient.get(PatientApi.getPatientList).pipe();
    }

    savePatient(patient){
        return this.httpClient.post(PatientApi.savePatient, patient).pipe();
    }
}