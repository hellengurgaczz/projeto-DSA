import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Ingresso } from '../../../models/ingresso.model';
import { IngressoService } from '../../../services/ingresso.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  ingressos : Ingresso[] = [];
  colunas: string[] = ['id', 'evento', 'desc', 'artista', 'valor', 'local', 'data', 'acoes'];
  profile_authorized: boolean;

  constructor(private service : IngressoService, private loginService: LoginService) { 
    this.profile_authorized = sessionStorage.getItem('login') === JSON.stringify("admin") || sessionStorage.getItem('login') === JSON.stringify("manager") ? true : false;
  }

  ngOnInit(): void {
    this.service.listarIngressos().subscribe(ingressos => {
      this.ingressos = ingressos;
    });
  }

  

}
