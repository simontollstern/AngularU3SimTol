import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AdminLogin } from '../models/admin-login.model';
import { AdminFull } from '../models/admin-full.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Component that provides the login form, register form and logout button
// Imports logic from AuthService
export class LoginComponent {
  loginModel = new AdminLogin('', '');
  registerModel = new AdminFull('', '', '', '');

  constructor(private auth: AuthServiceService) { }

  // Sets the message in the modal to nothing, which makes it disappear
  closeModal(): void{
    this.auth.modalMessage = "";
  }
}
