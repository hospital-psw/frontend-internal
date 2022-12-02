import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, take, map} from 'rxjs';
import { AuthService } from '../service/auth.service';  

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, 
              private toastr: ToastrService,
              private authService: AuthService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): | boolean 
       | UrlTree
       | Promise<boolean | UrlTree> 
       | Observable<boolean | UrlTree> {
       return this.authService.user.pipe(
        take(1),
        map(user =>{
          const isAuth = !!user;
            if(isAuth){
              return true;
            }
            this.toastr.warning("You must be logged in to access this path!")
            return this.router.createUrlTree(['/login']);
        })

       )
    
    
  }
  
}
