import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './users.service';
import { CustomActivatedRouteSnapshot } from './customroute'

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate{

  constructor(private authService: UsersService, private router: Router) { }
  canActivate(route: CustomActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    try{
      const expectedRole = route.data.expectedRole;
      const userRole = this.authService.getUserRole();
      if (userRole && userRole === expectedRole) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
    catch(error){
      this.router.navigate(['home/users/login']);
      return false;
    }
  }
}
