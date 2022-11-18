import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public username: any;
  public password: any;
  constructor(
    private Hero: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  login() {
    let email = this.username;
    let pswd = this.password;
    this.Hero.login(email, pswd).subscribe((data: any) => {
      if (data['success']) {
        console.log(data['success']);
        localStorage.setItem('email', email);
        this.Hero.adminEmailToken = email;
        this.router.navigateByUrl('/bookstatus');
      } else {
        alert('Enter Value Invalid please Register.');
      }
    });
  }
  register() {
    this.router.navigateByUrl('/Register');
  }
}
