import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingProjectsComponent } from './bidding-projects.component';

describe('BiddingProjectsComponent', () => {
  let component: BiddingProjectsComponent;
  let fixture: ComponentFixture<BiddingProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiddingProjectsComponent]
    });
    fixture = TestBed.createComponent(BiddingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
