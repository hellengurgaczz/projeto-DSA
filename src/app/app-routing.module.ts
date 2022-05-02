import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './ingressos/templates/cadastrar/cadastrar.component';
import { ComprarIngressoComponent } from './ingressos/templates/comprar-ingresso/comprar-ingresso.component';
import { DeletarComponent } from './ingressos/templates/deletar/deletar.component';
import { EditarComponent } from './ingressos/templates/editar/editar.component';
import { ListarComponent } from './ingressos/templates/listar/listar.component';

const routes: Routes = [
  {path: "", component: ListarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "listar", component: ListarComponent},
  {path: "editar/:id", component: EditarComponent},
  {path: "deletar/:id", component: DeletarComponent},
  {path: "comprar/:id", component: ComprarIngressoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
