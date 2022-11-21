import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { HeroService } from '../hero.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    private appComp: AppComponent,
    // private toastr: ToastrService
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
        this.appComp.showNav = true;
        if (data['data'] == 'STUDENT') {
          // this.toastr.success("LOGIN SUCCESS", "LOGIN");
          this.router.navigateByUrl('/userBookView');
          this.appComp.showNav = false;
          this.appComp.isStudent = "student";
          return '';
        }
        // this.toastr.success("ADMIN LOGIN SUCCESS");
        this.router.navigateByUrl('/bookstatus');
        this.appComp.isStudent = ''
        return '';
      } else {
        alert('Enter Value Invalid please Register.');
        // this.toastr.error("Invalid credential")
        return '';
      }
    });
  }
  register() {
    this.router.navigateByUrl('/Register');
  }
}
