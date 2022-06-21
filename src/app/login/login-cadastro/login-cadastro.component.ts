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
  response: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  }

  salvarLogin() {
    //verifica se este login já não existe:
      this.loginService.listarLogins().subscribe(logins => {
        logins.forEach(login => {
          if((login.email === this.login.email && login.senha === this.login.senha)) {
            this.response = true;
          } 
        });

        if(!this.response) {
          console.log('a')
          this.loginService.cadastrarLogin(this.login).subscribe(() => {
            this.router.navigate(['/listar']);
            sessionStorage.setItem('login', JSON.stringify(this.login.profile));
          });    
        }
      });
  }


}
