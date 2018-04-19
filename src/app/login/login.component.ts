import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private router: Router, private dataservice: DataService, private sessionservice: SessionService) {
    this.user = {};
  }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.user);
    this.dataservice.login(this.user).subscribe((response) => {
       if (response.status === 200) {
         this.sessionservice.setAuthSession(response.data.accessToken);
         this.router.navigate(['todo/list']);
       } else {
         this.sessionservice.clearAuthSession();
       }
    }, (error) => {
      console.log(error);
      this.sessionservice.clearAuthSession();
    });
  }
}
