import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardouselComponent } from './cardousel.component';

describe('CardouselComponent', () => {
  let component: CardouselComponent;
  let fixture: ComponentFixture<CardouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardouselComponent]
    });
    fixture = TestBed.createComponent(CardouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
