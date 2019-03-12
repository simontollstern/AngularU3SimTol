import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// The service responsible for authentication (login, logout).
export class AuthServiceService {
  constructor(private router: Router){}

  // Returns true or false depending on if a user is logged in
  checkIfLoggedIn(): boolean{
    return localStorage.getItem('user') ? true : false;
  }

  // Validate a string (min-length 10, must contain a number)
  validate(string): boolean{
    if(string.length >= 10 && string.match(/[\d]/)){
      return true;
    }
    return false;
  }

  // This duplicates some code, fix later maybe.
  // Changes the color of li elements when validating.
  recolorText(string): void{
    if(string.length >= 10){
      document.querySelectorAll('li')[0].style.color = 'hsl(100, 50%, 50%)';
    }else{
      document.querySelectorAll('li')[0].style.color = 'hsl(0, 100%, 60%)';
    }
    if(string.match(/[\d]/)){
      document.querySelectorAll('li')[1].style.color = 'hsl(100, 50%, 50%)';
    }else{
      document.querySelectorAll('li')[1].style.color = 'hsl(0, 100%, 60%)';
    }
  }

  // Logs the user in and redirects them.
  login(username): void{
    if(this.validate(username)){
      localStorage.setItem('user', username);
      this.router.navigate(['/']);
    }
  }

  // Logs the user out, removing them from localStorage.
  logout(): void{
    localStorage.removeItem('user');
  }
}
