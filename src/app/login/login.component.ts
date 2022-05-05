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

  constructor(private service: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

  verificarLogin() {
    this.service.buscarLogin(this.login).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

}
