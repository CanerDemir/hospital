import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DoctorApi } from "../app-gateway";

@Injectable({
	providedIn: "root"
})
export class DoctorService {
	constructor(private httpClient: HttpClient){}

	getDoctor(id){
		return this.httpClient.get(DoctorApi.getDoctor + id).pipe();
	}

	getDoctorList(){
		return this.httpClient.get(DoctorApi.getDoctorList).pipe();
	}

	saveDoctor(doctor){
		return this.httpClient.post(DoctorApi.saveDoctor, doctor).pipe();
	}
}