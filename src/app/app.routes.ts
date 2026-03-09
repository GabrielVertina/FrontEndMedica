import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {HelloComponent} from "./hello/hello.component";

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
    component: HelloComponent
  },
  {
    path: "",
    redirectTo: "register",
    pathMatch: "full"
  }

];
