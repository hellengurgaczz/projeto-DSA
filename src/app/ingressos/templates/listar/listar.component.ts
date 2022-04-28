import { Component, OnInit } from '@angular/core';
import { Ingresso } from '../../models/ingresso.model';
import { IngressoService } from '../../services/ingresso.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  ingressos : Ingresso[] = [];
  colunas: string[] = ['id', 'evento', 'desc', 'artista', 'valor', 'local', 'data', 'acoes'];

  constructor(private service : IngressoService) { }

  ngOnInit(): void {
    this.service.listarIngressos().subscribe(ingressos => {
      console.log(ingressos);
      this.ingressos = ingressos;
    });
  }

}
