import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {DrugComponent} from "./drug/drug.component";
import {DiseaseComponent} from "./disease/disease.component";
import {PatientComponent} from "./patient/patient.component";
import {DoctorComponent} from "./doctor/doctor.component";

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'drug', component: DrugComponent },
	{ path: 'disease', component: DiseaseComponent },
	{ path: 'patient', component: PatientComponent },
	{ path: 'doctor', component: DoctorComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
