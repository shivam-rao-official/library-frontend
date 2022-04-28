import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksviewcardComponent } from './booksviewcard.component';

describe('BooksviewcardComponent', () => {
  let component: BooksviewcardComponent;
  let fixture: ComponentFixture<BooksviewcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksviewcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksviewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
