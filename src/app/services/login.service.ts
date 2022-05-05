import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:3001/logins";


    buscarLogin(login : Login) : Observable<Login>{
      return this.http.get<Login>(this.URL + "/" + login.id);
    }

    cadastrarIngresso(login : Login) : Observable<any> {
      return this.http.post(this.URL, login);
    }
}
