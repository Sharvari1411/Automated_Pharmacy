import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainrelifComponent } from './painrelif.component';

describe('PainrelifComponent', () => {
  let component: PainrelifComponent;
  let fixture: ComponentFixture<PainrelifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainrelifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainrelifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
