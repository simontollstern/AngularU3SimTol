import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFull } from './models/admin-full.model';
import { AdminLogin } from '.models/admin-login.model';

@Injectable({
  providedIn: 'root'
})

// The service responsible for authentication (login, logout).
export class AuthServiceService {
  public admins: AdminFull[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      password: '1234567890'
    },
    {
      firstName: 'Kylie',
      lastName: 'Johnson',
      email: 'kylie.johnson@email.com',
      password: '0987654321'
    }
  ];

  loginForm:boolean = true;
  registerForm:boolean = false;
  modalMessage:string = "";

  constructor(private router: Router){}

  // Returns true or false depending on if a user is logged in
  checkIfLoggedIn(): boolean{
    return localStorage.getItem('admin') ? true : false;
  }

  // Logs the user in and redirects them.
  login(credentials: AdminLogin): void{
    let authenticated: boolean = false;
    for(let admin of this.admins){
      if(credentials.email === admin.email && credentials.password === admin.password){
        authenticated = true;
        break;
      }
    }
    if(authenticated){
      localStorage.setItem('admin', admin.firstName + ' ' + admin.lastName);
      this.router.navigate(['/']);
    }else{
      this.modalMessage = "Invalid email or password!";
    }
  }

  register(credentials: AdminLogin): void{
    this.admins.push({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      password: credentials.password
    });

    this.toggleForm();
  }

  toggleForm(): void{
    this.loginForm = !this.loginForm;
    this.registerForm = !this.registerForm;
  }

  // Logs the user out, removing them from localStorage.
  logout(): void{
    localStorage.removeItem('admin');
  }
}
