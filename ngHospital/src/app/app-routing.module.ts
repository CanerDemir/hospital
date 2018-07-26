import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routing = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routing) ],
    exports: [ RouterModule ]
})
export class AppRouting {}