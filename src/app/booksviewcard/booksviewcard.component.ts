import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-booksviewcard',
  templateUrl: './booksviewcard.component.html',
  styleUrls: ['./booksviewcard.component.scss']
})
export class BooksviewcardComponent implements OnInit {
  public isbn: any;
  public userEmail: any;
  constructor(
    private Hero: HeroService,
    private Router: Router
  ) { }

  ngOnInit(): void {
  }

  issueBooks() {
    let val = {
      isbn: this.isbn,
      userEmail: this.userEmail,
    };

    this.Hero.issueBook(val, this.Hero.adminEmailToken).subscribe((data: any) => {
      this.Router.navigateByUrl('/bookstatus');
    })
  }

  returnBooks() {
    let val = {
      isbn: this.isbn,
      userEmail: this.userEmail,
    };

    this.Hero.returnBook(val, this.Hero.adminEmailToken).subscribe((data: any) => {
      this.Router.navigateByUrl('/bookstatus');
    })
  }
}
