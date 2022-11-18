import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public name: any;
  public email: any;
  public collegeId: any;
  public password: any;
  public dept: any;

  constructor(
    private Hero: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
 
  }

  register() {
    let val = {
      name: this.name,
      emailId: this.email,
      pswd: this.password,
      collegeId: this.collegeId,
      dept: this.dept,
    };
    console.log(val);

    this.Hero.register(val, this.Hero.adminEmailToken).subscribe((data: any) => {
      this.router.navigateByUrl('/Userlist');
    });
  }
}
