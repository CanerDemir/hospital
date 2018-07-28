import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

	constructor() { }

	patientList: Patient[];
	displayPatientDialog: boolean = false;

	ngOnInit() {
	}

	showDialog(){
		this.displayPatientDialog = true;
	}

	getPatientList(){
		
	}

}
