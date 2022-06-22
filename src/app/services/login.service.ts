import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: Login = new Login();

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  logins : Login[] = [];

  URL = "http://localhost:3001/logins";

  cadastrarLogin(login : Login) : Observable<any> {
    return this.http.post(this.URL, login);
  }

  listarLogins() : Observable<Login[]>{
    return this.http.get<Login[]>(this.URL);
  }

}
