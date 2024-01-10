import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  private readonly httpCliente!: HttpClient;

  private apiBase = 'http://localhost:3000/';

  constructor(protected readonly injector: Injector) { 
if(injector == null || injector == undefined){
  throw new Error('Injector não pode ser nulo')
} 

this.httpCliente = injector.get(HttpClient);
  }

  protected httpGet(enpoint: string, ):Observable<any>{
    return this.httpCliente.get(`${this.apiBase}${enpoint}`);
  }
  
  protected httpPost(enpoint: string, dados: any):Observable<any>{
    return this.httpCliente.post(`${this.apiBase}${enpoint}`,dados);
  }

  protected httpPut(enpoint: string, dados: any):Observable<any>{
    return this.httpCliente.put(`${this.apiBase}${enpoint}`,dados);
  }

  protected httpDelete(enpoint: string):Observable<any>{
    return this.httpCliente.delete(`${this.apiBase}${enpoint}`);
  }


  //Tratamento erro e excessão
}
