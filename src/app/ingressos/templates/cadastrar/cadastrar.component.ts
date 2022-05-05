import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingresso } from '../../models/ingresso.model';
import { IngressoService } from '../../services/ingresso.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  ingresso: Ingresso = new Ingresso();

  constructor(private service: IngressoService, private router: Router) { }

  ngOnInit(): void {}

  salvarIngresso(){
    this.service.cadastrarIngresso(this.ingresso).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

}
