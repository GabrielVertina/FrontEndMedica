import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import * as timers from "node:timers";

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

message = "";
constructor(private http:HttpClient) {}

ngOnInit(){
  this.http.get("http://localhost:8080/api/hello",{responseType:'text'}).subscribe(
    res => {
      this.message = res;
    console.log("Resposta do backend",res);
    }
  );

}

}
