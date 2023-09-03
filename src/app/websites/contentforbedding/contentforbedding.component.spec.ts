import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentforbeddingComponent } from './contentforbedding.component';

describe('ContentforbeddingComponent', () => {
  let component: ContentforbeddingComponent;
  let fixture: ComponentFixture<ContentforbeddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentforbeddingComponent]
    });
    fixture = TestBed.createComponent(ContentforbeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
