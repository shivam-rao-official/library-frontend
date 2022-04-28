import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcardsviewComponent } from './bookcardsview.component';

describe('BookcardsviewComponent', () => {
  let component: BookcardsviewComponent;
  let fixture: ComponentFixture<BookcardsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcardsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcardsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
