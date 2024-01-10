import { AuthenticationService } from './auth/service/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authenticationService: AuthenticationService,
  private router: Router,
  private route: ActivatedRoute){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    
      const url =  state.url;

    return this.authenticationService.usuarioEstaLogado()
    .pipe(
      tap((estalogado) => {
        if (!estalogado){
          this.router.navigateByUrl('/auth/login');
          return false;
        }else{
          return true;
        }
      })
    )
  
  }
  
}
