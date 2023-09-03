import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningstatusComponent } from './earningstatus.component';

describe('EarningstatusComponent', () => {
  let component: EarningstatusComponent;
  let fixture: ComponentFixture<EarningstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarningstatusComponent]
    });
    fixture = TestBed.createComponent(EarningstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
