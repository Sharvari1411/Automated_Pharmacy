import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagnocards3Component } from './diagnocards3.component';

describe('Diagnocards3Component', () => {
  let component: Diagnocards3Component;
  let fixture: ComponentFixture<Diagnocards3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diagnocards3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diagnocards3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
