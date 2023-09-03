import { TestBed } from '@angular/core/testing';

import { HandlebarsService } from './handlebars.service';

describe('HandlebarsService', () => {
  let service: HandlebarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlebarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
