import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private dataservice: DataService) {
    this.user = {};
  }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.user);
    this.dataservice.login(this.user).subscribe((response) => {
      debugger;
    }, (error) => {
      debugger;
    });
  }

}
