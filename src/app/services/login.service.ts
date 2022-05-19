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

  URL = "http://localhost:3001/logins";

    buscarLogin(email : String) : Observable<Login>{
      return this.http.get<Login>(this.URL + "/");
    }

    cadastrarLogin(login : Login) : Observable<any> {
      console.log(login)
      return this.http.post(this.URL, login);
    }

    verificarLogin() {
      const email = this.route.snapshot.paramMap.get("email");
      this.buscarLogin(String(email)).subscribe((login) =>{
        this.login = login;
        return login;
      });
    }
}
