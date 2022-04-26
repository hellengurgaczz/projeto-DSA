import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ingressos/templates/header/header.component';
import { FooterComponent } from './ingressos/templates/footer/footer.component';
import { CadastrarComponent } from './ingressos/templates/cadastrar/cadastrar.component';
import { ListarComponent } from './ingressos/templates/listar/listar.component';
import { DeletarComponent } from './ingressos/templates/deletar/deletar.component';
import { EditarComponent } from './ingressos/templates/editar/editar.component';

// imports angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastrarComponent,
    ListarComponent,
    DeletarComponent,
    EditarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
