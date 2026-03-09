import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormsModule} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private authService: AuthService,
              private router: Router) { }

  login() {

    this.authService.login(this.email, this.password)
      .subscribe((res:any) => {

        localStorage.setItem("token", res.token);

        this.router.navigate(["/hello"]);

      });

  }}

