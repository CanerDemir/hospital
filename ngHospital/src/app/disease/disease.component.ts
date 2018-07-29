import { Component, OnInit } from '@angular/core';
import { Disease } from '../models/disease.model';
import { DiseaseService } from '../services/disease-service.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

	constructor(private diseaseService: DiseaseService) { }

	diseaseList: Disease[];
	displayDiseaseDialog: boolean = false;

	ngOnInit() {
		this.getDiseaseList();
	}

	showDialog(){
		this.displayDiseaseDialog = true;
	}

	getDiseaseList(){
		this.diseaseService.getDiseaseList().subscribe(
			(resp: Disease[]) => {
				this.diseaseList = resp;
			}
		);
	}
}
