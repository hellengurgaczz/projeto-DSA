import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingresso } from '../../../models/ingresso.model';
import { IngressoService } from '../../../services/ingresso.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  ingresso: Ingresso = new Ingresso();

  constructor(private service: IngressoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.service.buscarIngressoPorId(Number(str)).subscribe((ingresso) =>{
      this.ingresso = ingresso;
    });
  }

  salvarIngresso(){
    this.service.atualizarIngresso(this.ingresso, this.ingresso.id).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }
}
