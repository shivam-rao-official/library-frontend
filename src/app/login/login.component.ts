import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
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
    private route: ActivatedRoute,
    private appComp: AppComponent
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
        this.appComp.showNav = true
        if(data['data'] == "STUDENT"){
          
          this.router.navigateByUrl('/userBookView');
          return ""
        }
        this.router.navigateByUrl('/bookstatus');
        return ""
      } else {
        alert('Enter Value Invalid please Register.');
        return ""
      }
    });
  }
  register() {
    this.router.navigateByUrl('/Register');
  }
}
