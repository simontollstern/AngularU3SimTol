import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AdminLogin } from '../models/admin-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Component that handles login/logout
// Imports logic from AuthService
export class LoginComponent {
  authModel = new AdminLogin('', '');

  constructor(private auth: AuthServiceService) { }

  closeModal(): void{
    this.auth.modalMessage = "";
  }
}
