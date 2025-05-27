import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrendingBookComponent } from './top-trending-book.component';

describe('TopTrendingBookComponent', () => {
  let component: TopTrendingBookComponent;
  let fixture: ComponentFixture<TopTrendingBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTrendingBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTrendingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
