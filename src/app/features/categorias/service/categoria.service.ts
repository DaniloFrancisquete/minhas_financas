import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { Categoria } from '../components/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService  extends HttpBaseService{

  private emdpoint  = 'categorias';
  
  constructor(protected override readonly injector: Injector) {
    super(injector)
   }

   getCategorias(): Observable<any> {
    return this.httpGet(this.emdpoint);
   }

   getCategoriasPeloId(id: number): Observable<any> {
    return this.httpGet(`${this.emdpoint}/${id}`);
   }

   alterarCategoria(payload: Categoria): Observable<any> {
    return this.httpPut(`${this.emdpoint}/${payload.id}`,payload);
   }

   excluirCategoria(id:number): Observable <any> {
    return this.httpDelete(`${this.emdpoint}/${id}`);
   }

   criarCategoria(payload: Categoria): Observable<any> {
    return this.httpPost(`${this.emdpoint}`,payload);
   }

}
