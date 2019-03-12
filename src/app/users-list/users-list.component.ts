import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

// The Users List component - The ul containing the users
export class UsersListComponent {
  @Input('userList') users: string[];
  textColor: string = 'hsl(100, 50%, 50%)';

  // Runs when the "Toggle colors" button is pressed
  // Changes the color of the text based on the current color
  changeColor(): void{
    if(this.textColor == 'hsl(100, 50%, 50%)'){
      this.textColor = 'hsl(0, 50%, 50%)';
    }else{
      this.textColor = 'hsl(100, 50%, 50%)';
    }
  }

  constructor() { }
}
