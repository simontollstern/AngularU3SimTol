import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

// The User List Item component - The li in the Users List
export class UserListItemComponent {
  @Input() user: string;
  @Input () textColor: string;

  constructor() { }
}
