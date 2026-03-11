import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {HelloComponent} from "./hello/hello.component";
import {authGuard} from "./auth/auth.guard";

export const routes: Routes = [
{
path:"register",
  component: RegisterComponent
  },


  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "hello",
    component: HelloComponent,
 canActivate : [authGuard]

  },
  {
    path: "",
    redirectTo: "register",
    pathMatch: "full"
  }

];
