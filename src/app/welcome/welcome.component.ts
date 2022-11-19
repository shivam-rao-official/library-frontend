import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private Hero: HeroService, private appComp: AppComponent) {}

  ngOnInit(): void {
    this.Hero.adminEmailToken = '';
    this.appComp.showNav = false
  }
}
