import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreCardComponent } from './book-store-card.component';

describe('BookStoreCardComponent', () => {
  let component: BookStoreCardComponent;
  let fixture: ComponentFixture<BookStoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookStoreCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookStoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
