import { Component, OnInit } from '@angular/core';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'library';
  loginToken: String = '';
  showNav = false;
  isStudent = '';
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.loginToken = this.heroService.adminEmailToken;
  }

}
