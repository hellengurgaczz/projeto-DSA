import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ingressos/templates/header/header.component';
import { CadastrarComponent } from './ingressos/templates/cadastrar/cadastrar.component';
import { ListarComponent } from './ingressos/templates/listar/listar.component';
import { DeletarComponent } from './ingressos/templates/deletar/deletar.component';
import { EditarComponent } from './ingressos/templates/editar/editar.component';

// imports angular material

import { FormsModule } from '@angular/forms';
import { ComprarIngressoComponent } from './ingressos/templates/comprar-ingresso/comprar-ingresso.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastrarComponent,
    ListarComponent,
    DeletarComponent,
    EditarComponent,
    ComprarIngressoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
