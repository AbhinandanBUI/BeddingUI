import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipAndPopoverComponent } from './tooltip-and-popover.component';

describe('TooltipAndPopoverComponent', () => {
  let component: TooltipAndPopoverComponent;
  let fixture: ComponentFixture<TooltipAndPopoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipAndPopoverComponent]
    });
    fixture = TestBed.createComponent(TooltipAndPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
