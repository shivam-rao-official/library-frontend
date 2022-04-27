import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public name:any;
  public  mobile :any;
  public email:any;
  public address :any;
  public  city:any;
  public  pincode:any;
  public date:any;
  public  username:any;
  public  password:any;
  public confirmpassword :any;
  




  constructor(private Hero:HeroService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.register();
  }
 

  register(){
    let val={'name':this.name,'mobile':this.mobile,'email':this.email,'address':this.address,'city':this.city,'pincode':this.pincode,'username':this.username,'password':this.password,'confirmpassword':this.confirmpassword,'dob':this.date};
    console.log(val);

    this.Hero.register(val).subscribe((data:any) =>{
      this.router.navigateByUrl('/login');
    })
    
    
    
    }
  }

