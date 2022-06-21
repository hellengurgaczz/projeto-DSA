import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingresso } from 'src/app/models/ingresso.model';
import { IngressoService } from 'src/app/services/ingresso.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  profile_authorized: boolean | null;
  public pesquisa_ingresso: String = "";
  ingressos : Ingresso[] = [];

  constructor(private service : IngressoService, private router: Router, private route: ActivatedRoute) { 
    this.profile_authorized = sessionStorage.getItem('login') === JSON.stringify("admin") || sessionStorage.getItem('login') === JSON.stringify("manager") ? true : false;
  }
  
  ngOnInit(): void {
 
  }
  
  pesquisarIngresso(){
    this.service.listarIngressos().subscribe(ingressos => {
      ingressos.forEach(ingresso => {
        if(JSON.stringify(this.pesquisa_ingresso.toUpperCase()) == JSON.stringify(ingresso.evento.toUpperCase())){
          this.router.navigate(['/listar/' + ingresso.id]);
        }
      })
    });
  }

}
