import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

// The Edit Users component - The input field and buttons for adding and removing users
export class EditUsersComponent {
  name: string = "";
  @Output() addUser = new EventEmitter<string>();
  @Output() removeUser = new EventEmitter<any>();

  // Runs when the "Add" button is pressed
  // Emits the addUser event with the value from the input field
  add(): void{
    this.addUser.emit(this.name);
    this.name = "";
  }

  // Runs when the "remove" button is pressed
  // Emits the removeUser event without a value
  remove(): void{
    this.removeUser.emit(null);
  }

  constructor() { }
}
