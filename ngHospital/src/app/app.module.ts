import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '../../node_modules/@angular/forms';
import {ToastModule} from 'primeng/toast';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from './app-material.module';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app-routing.module';
import { MessageService } from '../../node_modules/primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
