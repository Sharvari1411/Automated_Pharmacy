import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmrutanjanComponent } from './amrutanjan.component';

describe('AmrutanjanComponent', () => {
  let component: AmrutanjanComponent;
  let fixture: ComponentFixture<AmrutanjanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmrutanjanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmrutanjanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
