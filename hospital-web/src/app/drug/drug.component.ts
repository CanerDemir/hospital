import { Component, OnInit, ViewChild } from '@angular/core';
import { DrugService } from '../services/drug-service.service';
import { Drug } from '../models/drug.model';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-drug',
	templateUrl: './drug.component.html',
	styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {

	constructor(private drugService: DrugService) { }

	@ViewChild('drugForm', null) drugForm: NgForm;
	drugList: Drug[];

	ngOnInit() {
		this.getDrugList();
	}

	getDrugList(){
		this.drugService.getDrugList().subscribe(
			(resp: Drug[]) => {
				this.drugList = resp;
			}
		);
	}

	saveDrug(){
		let drug = {
			drugId: "",
			drugName: this.drugForm.value.drugName,
			drugDescription: this.drugForm.value.drugDescription
		};
		this.drugService.saveDrug(drug).subscribe(
			(resp) => {
				this.getDrugList();
				this.drugForm.reset();
			}
		);
	}
}
