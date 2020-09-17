import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagnocards2Component } from './diagnocards2.component';

describe('Diagnocards2Component', () => {
  let component: Diagnocards2Component;
  let fixture: ComponentFixture<Diagnocards2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diagnocards2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diagnocards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
