import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../models/login.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

  verificarLogin() {
    const email = this.route.snapshot.paramMap.get("email");
    this.loginService.buscarLogin(String(email)).subscribe((login) =>{
      this.login = login;
    });

    if(this.login && this.login.senha === this.login.senha) {
      this.router.navigate(['/listar']);
    }
  }

}
