import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightNoComponent } from './weight-no.component';

describe('WeightNoComponent', () => {
  let component: WeightNoComponent;
  let fixture: ComponentFixture<WeightNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
