import { Component } from '@angular/core';
import  { HttpClient } from "@angular/common/http";
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: "";
  response: any;
  url = 'https://apilayer.net/api/check' + '?' + 'access_key=c32d0bb22a827d35b6a6a93b01611afb' + '&' + 'email=';

  constructor(private http: HttpClient){
  }

  submit(){
    this.http.get(this.url + this.email).pipe(debounceTime(200)).subscribe((response) => {
      this.response = response;
    });
  }

}
