import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    const user = {username: this.username, password: this.password} ;
     this.authService.login(user).subscribe((res: any) => {
      if (res.access_token) {
        localStorage.setItem('authorization', res.access_token);
      }
      this.router.navigate(['./landing']);
    });

  }
}
