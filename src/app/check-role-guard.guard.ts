import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CheckRoleGuardGuard implements CanActivate {
  boolVar: boolean = true;
  constructor(private _router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let id = +next.paramMap.get('id');

    if (this.boolVar) {
     console.log('true can activate called');     
      return true;
    }
    else {
     console.log('false can activate called');     
      this._router.navigate['/notfound'];
      return false;
    }
  }
}
