import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username:any;
  public password:any;
  constructor(private Hero:HeroService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(){
    let val={'username':this.username,'password':this.password}
    console.log(val);

    this.Hero.login(val).subscribe((data:any) =>{
      if(data==1){
        this.router.navigateByUrl('/Userlist');
      }else{
        alert("Enter Value Invalid please Register.")
      }
      
    })
    
}
register(){
  this.router.navigateByUrl('/Register');
}
}
