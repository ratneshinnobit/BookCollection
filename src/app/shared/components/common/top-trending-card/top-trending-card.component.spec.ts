import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrendingCardComponent } from './top-trending-card.component';

describe('TopTrendingCardComponent', () => {
  let component: TopTrendingCardComponent;
  let fixture: ComponentFixture<TopTrendingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTrendingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTrendingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
