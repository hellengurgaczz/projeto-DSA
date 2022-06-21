import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingresso } from 'src/app/models/ingresso.model';
import { IngressoService } from 'src/app/services/ingresso.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  profile_authorized: boolean | null;
  public pesquisa_ingresso: String | undefined;
  ingressos : Ingresso[] = [];

  constructor(private service : IngressoService, private router: Router) { 
    this.profile_authorized = sessionStorage.getItem('login') === JSON.stringify("admin") || sessionStorage.getItem('login') === JSON.stringify("manager") ? true : false;
  }
  
  ngOnInit(): void {
  }
  
  pesquisarIngresso(){
    this.service.listarIngressos().subscribe(ingressos => {
      ingressos.forEach(ingresso => {
        if(ingresso.evento == this.pesquisa_ingresso){
          this.router.navigate(['/listar/{{ingresso.id}}']);
        }
      })
    });
  }

}
