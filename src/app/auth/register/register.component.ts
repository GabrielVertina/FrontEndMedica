import {Component} from "@angular/core";
import {FormBuilder, FormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
selector: 'app-register',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './register.component.html',
})

export class RegisterComponent {
  name: string= "";
  email: string = "";
  password: string = "";
  constructor(private authService: AuthService,) {}
register() {
this.authService.register(this.name, this.email, this.password).subscribe((res: any) => {

localStorage.setItem("token", res.token);


})


}



}

