import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from '../../models/compra.model';
import { Ingresso } from '../../models/ingresso.model';
import { IngressoService } from '../../services/ingresso.service';

@Component({
  selector: 'app-comprar-ingresso',
  templateUrl: './comprar-ingresso.component.html',
  styleUrls: ['./comprar-ingresso.component.css']
})
export class ComprarIngressoComponent implements OnInit {

  ingresso: Ingresso = new Ingresso();
  compra: Compra = new Compra();

  constructor(private IngressoService: IngressoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.IngressoService.buscarIngressoPorId(Number(str)).subscribe((ingresso) =>{
      this.ingresso = ingresso;
    });


  }

  // comprarIngresso(){
  //   console.log("--------> Executou o método comprar ingresso()");
  //   this.service.deletarIngresso(this.ingresso.id).subscribe(() => {
  //       this.router.navigate(['/listar']);
  //   });
  // }
}
