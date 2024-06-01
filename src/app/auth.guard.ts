import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    console.log("expected role:" + expectedRole);
    console.log("hasRole:" + this.authService.hasRole(expectedRole));

    
    if (!this.authService.isLoggedIn || !this.authService.hasRole(expectedRole)) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
