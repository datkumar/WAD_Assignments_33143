import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Registration';
  users: Array<String> = [];
  username: String;
  password: String;
  add(){
    this.users.push(this.username);
    this.username = ""
    this.password = ""
  }
}
