import { Component, OnInit } from '@angular/core';
import { User } from '../login/login.component';
import { LoginService } from '../login/login-service.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private loginService: LoginService) { }
	user: User;

	ngOnInit() {
		this.user = this.loginService.getUser();
	}

}
