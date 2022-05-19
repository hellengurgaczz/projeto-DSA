import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  login: Login = new Login();

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  }

  salvarLogin() {
    // verifica se este login já não existe:
    if(!this.verificarLogin()) {
      this.loginService.cadastrarLogin(this.login).subscribe(() => {
        this.router.navigate(['/listar']);
      });    
    }
  }

  verificarLogin() {
    this.loginService.verificarLogin();

    if(this.login && this.login.senha === this.login.senha) {
      return false;
    } else {
      return true;
    }
  }
}
