import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

// Component showing individual users
export class SingleUserComponent {
  user: string;

  // Gets the parameter from the url
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.user = params.name;
    })
  }
}
