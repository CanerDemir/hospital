import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { User } from "./login.component";

@Injectable({
    providedIn: "root"
})
export class LoginService {

    constructor(private httpClient: HttpClient){}

    loggedUser: User;

    getUser(){
        return this.loggedUser;
    }

    setUser(user){
        this.loggedUser = user;
    }

    login(user){
        return this.httpClient.post("http://localhost:8090/user/login", user).pipe();
    }
}