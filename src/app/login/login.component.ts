import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AdminLogin } from '../models/admin-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Component that handles login/register/logout
// Imports logic from AuthService
export class LoginComponent {
  authModel = new AdminLogin('', '');

  constructor(private auth: AuthServiceService) { }

  // Sets the message in the modal to nothing, which makes it disappear
  closeModal(): void{
    this.auth.modalMessage = "";
  }
}
