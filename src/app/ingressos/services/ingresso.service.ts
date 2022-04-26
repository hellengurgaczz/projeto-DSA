import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ingresso } from "../models/ingresso.model";


@Injectable({
    providedIn: 'root'
})

export class  IngressoService {

    constructor(private http: HttpClient) { }

    URL = "http://localhost:4200";

    listarIngressos() : Observable<Ingresso[]>{    
        return this.http.get<Ingresso[]>(this.URL);
    }

    buscarIngressoPorId(id : number) : Observable<Ingresso>{
        return this.http.get<Ingresso>(this.URL + "/" + id);
    }

    cadastrarIngresso(ingresso : Ingresso) : Observable<any> {
        console.log(this.URL)
        return this.http.post(this.URL, ingresso);
    }
    
    atualizarIngresso(ingresso: Ingresso, id : number) : Observable<any> {
        return this.http.put(this.URL + "/" + id, ingresso);
    }
    
    deletarIngresso(id : number) : Observable<any> {
        return this.http.delete(this.URL + "/" + id);
    }
    
}

  