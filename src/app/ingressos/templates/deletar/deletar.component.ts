import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingresso } from '../../models/ingresso.model';
import { IngressoService } from '../../services/ingresso.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  ingresso: Ingresso = new Ingresso();

  constructor(private service: IngressoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.service.buscarIngressoPorId(Number(str)).subscribe((ingresso) =>{
      this.ingresso = ingresso;
    });
  }

  deletarIngresso(){
    console.log("--------> Executou o método excluirProduto()");
    this.service.deletarIngresso(this.ingresso.id).subscribe(() => {
          this.router.navigate(['/listar']);
    });
  }

}
