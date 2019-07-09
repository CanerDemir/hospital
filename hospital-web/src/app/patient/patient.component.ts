import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient-service.service';
import { NgForm } from '@angular/forms';
import { DiseaseService } from '../services/disease-service.service';
import { Disease } from '../models/disease.model';

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

	constructor(private patientService: PatientService, private diseaseService: DiseaseService) { }

	@ViewChild('patientForm', null) patientForm: NgForm;
	patientList: Patient[];
	diseaseList: Disease[];

	ngOnInit() {
		this.getPatientList();
		this.getDiseaseList();
	}

	getPatientList(){
		this.patientService.getPatientList().subscribe(
			(resp: Patient[]) => {
				this.patientList = resp;
			}
		);
	}

	savePatient(){
		this.patientForm.value.diseases = [this.patientForm.value.disease];
		this.patientService.savePatient(this.patientForm.value).subscribe(
			(resp) => {
				this.getPatientList();
				this.patientForm.reset();
			}
		);
	}

	getDiseaseList(){
		this.diseaseService.getDiseaseList().subscribe(
			(resp: Disease[]) => {
				this.diseaseList = resp;
			}
		);
	}

}
