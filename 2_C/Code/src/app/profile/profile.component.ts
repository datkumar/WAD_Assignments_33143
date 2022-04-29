import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() users: String[];
  constructor() { }

  ngOnInit(): void {
  }

  delete(user: String){
    const index:number = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
