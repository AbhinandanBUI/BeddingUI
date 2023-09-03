import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMaintainenceComponent } from './under-maintainence.component';

describe('UnderMaintainenceComponent', () => {
  let component: UnderMaintainenceComponent;
  let fixture: ComponentFixture<UnderMaintainenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderMaintainenceComponent]
    });
    fixture = TestBed.createComponent(UnderMaintainenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
