import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DrugComponent } from './drug/drug.component';
import { DiseaseComponent } from './disease/disease.component';
import { PatientComponent } from './patient/patient.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "./app-material.module";
import {AppPrimengModule} from "./app-primeng.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		DrugComponent,
		DiseaseComponent,
		PatientComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule,
		AppMaterialModule,
		AppPrimengModule
	],
	providers: [MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
