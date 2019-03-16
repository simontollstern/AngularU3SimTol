import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// The service providing methods to get users from the API
export class UsersService {
  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // Get the user with the specified id
  getUser(id){
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
