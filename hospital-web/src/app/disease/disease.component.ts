import {Component, OnInit, ViewChild} from '@angular/core';
import { Disease } from '../models/disease.model';
import { DiseaseService } from '../services/disease-service.service';
import {NgForm} from "@angular/forms";

@Component({
	selector: 'app-disease',
	templateUrl: './disease.component.html',
	styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent implements OnInit {

	constructor(private diseaseService: DiseaseService) { }

	diseaseList: Disease[];
	@ViewChild("diseaseForm", null) diseaseForm: NgForm;

	ngOnInit() {
		this.getDiseaseList();
	}

	getDiseaseList(){
		this.diseaseService.getDiseaseList().subscribe(
			(resp: Disease[]) => {
				this.diseaseList = resp;
			}
		);
	}

	save(disease: any) {
		this.diseaseService.saveDisease(disease).subscribe(
			(resp: any) => {
				this.diseaseForm.form.reset();
				this.getDiseaseList();
			}
		);
	}
}
