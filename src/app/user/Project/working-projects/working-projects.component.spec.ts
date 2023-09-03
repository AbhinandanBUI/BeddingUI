import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingProjectsComponent } from './working-projects.component';

describe('WorkingProjectsComponent', () => {
  let component: WorkingProjectsComponent;
  let fixture: ComponentFixture<WorkingProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingProjectsComponent]
    });
    fixture = TestBed.createComponent(WorkingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
