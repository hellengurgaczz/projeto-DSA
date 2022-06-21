import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './ingressos/templates/cadastrar/cadastrar.component';
import { ComprarIngressoComponent } from './compra/comprar-ingresso/comprar-ingresso.component';
import { DeletarComponent } from './ingressos/templates/deletar/deletar.component';
import { EditarComponent } from './ingressos/templates/editar/editar.component';
import { ListarComponent } from './ingressos/templates/listar/listar.component';
import { LoginComponent } from './login/login.component';
import { LoginCadastroComponent } from './login/login-cadastro/login-cadastro.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "listar", component: ListarComponent},
  {path: "listar/:id", component: ListarComponent},
  {path: "editar/:id", component: EditarComponent},
  {path: "deletar/:id", component: DeletarComponent},
  {path: "comprar/:id", component: ComprarIngressoComponent},
  {path: "login", component: LoginComponent},
  {path: "login/cadastro", component: LoginCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
