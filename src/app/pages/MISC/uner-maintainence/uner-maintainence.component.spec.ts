import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnerMaintainenceComponent } from './uner-maintainence.component';

describe('UnerMaintainenceComponent', () => {
  let component: UnerMaintainenceComponent;
  let fixture: ComponentFixture<UnerMaintainenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnerMaintainenceComponent]
    });
    fixture = TestBed.createComponent(UnerMaintainenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
