import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './login-service.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { MessageService } from '../../../node_modules/primeng/components/common/messageservice';
import { Router } from '../../../node_modules/@angular/router';

export interface User {
	userId: null,
	name: null,
	surname: null,
	email: null,
	password: null
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private loginService: LoginService, private messageService: MessageService, private router: Router) { }

	@ViewChild('loginForm') loginForm: NgForm;
	loggedUser: User;

	ngOnInit() {
	}

	onLogin(){
		console.log(this.loginForm.value);
		
		this.loginService.login(this.loginForm.value).subscribe(
			(response: User) => {
				if (response) {
					this.loggedUser = response;
					this.loginService.setUser(response);
					this.router.navigate(['']);
					this.showSuccess();
				} else {
					this.showError();
				}
			}
		);
	}

	showSuccess() {
        this.messageService.add({severity:'success', summary: 'Başarılı', detail:'Giriş Gerçekleşti'});
	}

	showError() {
        this.messageService.add({severity:'error', summary: 'Hata', detail:'Bir sorun var!!!'});
    }
}
