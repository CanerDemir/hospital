import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DrugComponent } from "./drug/drug.component";
import { DiseaseComponent } from "./disease/disease.component";
import { PatientComponent } from "./patient/patient.component";

const routing = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'drug', component: DrugComponent },
    { path: 'disease', component: DiseaseComponent },
    { path: 'patient', component: PatientComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routing) ],
    exports: [ RouterModule ]
})
export class AppRouting {}