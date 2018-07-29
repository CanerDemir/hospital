import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient-service.service';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

	constructor(private patientService: PatientService) { }

	@ViewChild('patientForm') patientForm: NgForm;
	patientList: Patient[];
	displayPatientDialog: boolean = false;

	ngOnInit() {
		this.getPatientList();
	}

	showDialog(){
		this.displayPatientDialog = true;
	}

	getPatientList(){
		this.patientService.getPatientList().subscribe(
			(resp: Patient[]) => {
				this.patientList = resp;
			}
		);
	}

	savePatient(){
		this.patientService.savePatient(this.patientForm.value).subscribe(
			(resp) => {
				this.displayPatientDialog = false;
				this.getPatientList();
				this.patientForm.reset();
			}
		);
	}

}
