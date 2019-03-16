import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// The Dashboard component - Basically a wrapper for other components
export class DashboardComponent {
  userList: any;

  constructor(private auth: AuthServiceService, private users: UsersService) {
    this.showUsers();
  }

  // Runs when the addUser event is emitted
  // Pushes the user input to userList and clears the input field
  onAddUser(input: string): void{
    if(input.length > 0){
      this.userList.push(input);
      document.querySelector('input').value = '';
      document.querySelector('input').focus();
    }
  }

  // Runs when the removeUser event is emitted
  // Removes the last value from userList
  onRemoveUser(): void{
    this.userList.pop();
  }

  showUsers(){
    this.users.getUsers().subscribe(
      (response) => { this.userList = response }
    );
  }
}
