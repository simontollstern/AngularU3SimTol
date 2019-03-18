import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFull } from './models/admin-full.model';
import { AdminLogin } from './models/admin-login.model';

@Injectable({
  providedIn: 'root'
})

// The service responsible for authentication (login, register, logout).
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

  // Compares the parameter to the list of users
  // If it exists, log the user in
  // Otherwise open the modal with an error message
  verifyLogin(credentials: AdminLogin): void{
    let authenticated: boolean = false;
    let authenticatedAdmin: AdminLogin;
    for(let admin of this.admins){
      if(credentials.email === admin.email && credentials.password === admin.password){
        authenticated = true;
        authenticatedAdmin = admin;
        break;
      }
    }
    if(authenticated){
      this.login(authenticatedAdmin);
    }else{
      this.modalMessage = "Invalid email or password!";
    }
  }

  // Sets localStorage to the logged in user and navigates to the dashboard
  login(admin): void{
    localStorage.setItem('admin', admin.firstName + ' ' + admin.lastName);
    this.router.navigate(['/']);
  }

  // Add a new user to the list of users
  register(credentials: AdminFull): void{
    this.admins.push({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      password: credentials.password
    });

    this.toggleForm();
  }

  // As a side note: perhaps methods related to the forms should be in login.component instead.
  // This works though

  // Hides the login form and displays the register form
  // And vice versa
  toggleForm(): void{
    this.loginForm = !this.loginForm;
    this.registerForm = !this.registerForm;
  }

  // Logs the user out, removing them from localStorage.
  logout(): void{
    localStorage.removeItem('admin');
  }
}
