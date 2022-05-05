import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from '../../models/compra.model';
import { Ingresso } from '../../models/ingresso.model';
import { CompraService } from '../../services/compra.service';
import { IngressoService } from '../../services/ingresso.service';

@Component({
  selector: 'app-comprar-ingresso',
  templateUrl: './comprar-ingresso.component.html',
  styleUrls: ['./comprar-ingresso.component.css']
})
export class ComprarIngressoComponent implements OnInit {

  ingresso: Ingresso = new Ingresso();
  compra: Compra = new Compra();

  constructor(private ingressoService: IngressoService, private compraService: CompraService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.ingressoService.buscarIngressoPorId(Number(str)).subscribe((ingresso) =>{
      this.ingresso = ingresso;
    });
  }

  comprarIngresso(){
    this.compraService.cadastrarCompra(this.compra).subscribe(() => {
        this.ingresso.numero_ingressos = this.ingresso.numero_ingressos - this.compra.quantidade_ingressos;
        this.ingressoService.atualizarIngresso(this.ingresso, this.ingresso.id)
        this.router.navigate(['/listar']);
    });
  }
}
