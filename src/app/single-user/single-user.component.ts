import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

// Component showing individual users
export class SingleUserComponent {
  user: any;

  // Gets the parameter from the url
  constructor(private route: ActivatedRoute, private users: UsersService) {
    route.params.subscribe(params => {
      this.user = params.name;
    });

    this.showCurrentUser();
  }

  // Uses the parameter from the url to get the correct user from the API
  showCurrentUser(){
    this.users.getUser(this.user).subscribe(
      (response) => {
        this.user = response;
      }
    );
  }
}
