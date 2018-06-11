import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { <%= classify(authService) %>Service } from './<%=dasherize(authServicePath)%>';


@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Guard implements CanActivate {
  constructor(
    private authService: <%= classify(authService) %>Service,
    private router: Router
  ) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const loggedIn = this.authService.isLoggedIn();
    if(!loggedIn) {  // check if the user is logged in and has authToken
      this.router.navigate(['/home']);   // navigate to login page if not authenticated
      return false;
    }
    return true;
  }
}
