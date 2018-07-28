import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '../../node_modules/@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from './app-material.module';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app-routing.module';
import { MessageService } from '../../node_modules/primeng/components/common/messageservice';
import { HeaderComponent } from './header/header.component';
import { DrugComponent } from './drug/drug.component';
import { DiseaseComponent } from './disease/disease.component';
import { PatientComponent } from './patient/patient.component';
import { AppPrimengModule } from './app-primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    DrugComponent,
    DiseaseComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    AppPrimengModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
