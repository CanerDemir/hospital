import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Doctor} from "../models/doctor.model";
import {DoctorService} from "../services/doctor.service";

@Component({
	selector: 'app-doctor',
	templateUrl: './doctor.component.html',
	styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

	constructor(private doctorService: DoctorService) { }

	@ViewChild('doctorForm', null) doctorForm: NgForm;
	doctorList: Doctor[];

	ngOnInit() {
		this.getDoctorList();
	}

	getDoctorList(){
		this.doctorService.getDoctorList().subscribe(
			(resp: Doctor[]) => {
				this.doctorList = resp;
			}
		);
	}

	saveDoctor(){
		this.doctorService.saveDoctor(this.doctorForm.value).subscribe(
			(resp) => {
				this.getDoctorList();
				this.doctorForm.reset();
			}
		);
	}
}
