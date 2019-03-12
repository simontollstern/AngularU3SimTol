import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Component that handles login/logout
// Imports logic from AuthService
export class LoginComponent {
  username: string;

  constructor(private auth: AuthServiceService) { }
}
