import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})

// A route guard to only give logged in users access to the dashboard
export class RouteGuardService implements CanActivate {
  constructor(private router: Router, private auth: AuthServiceService) { }

  // Only navigate to the dashboard if there is a user in localStorage.
  canActivate(): boolean{
    if (!this.auth.checkIfLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
