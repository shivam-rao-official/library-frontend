import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstatusComponent } from './bookstatus.component';

describe('BookstatusComponent', () => {
  let component: BookstatusComponent;
  let fixture: ComponentFixture<BookstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
