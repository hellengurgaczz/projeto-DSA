import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra.model';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  constructor(private http: HttpClient) {}

  URL = 'http://localhost:3000/compras';

  cadastrarCompra(compra: Compra): Observable<any> {
    return this.http.post(this.URL, compra);
  }
}
