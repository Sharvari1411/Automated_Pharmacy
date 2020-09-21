import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightcareProductsListComponent } from './weightcare-products-list.component';

describe('WeightcareProductsListComponent', () => {
  let component: WeightcareProductsListComponent;
  let fixture: ComponentFixture<WeightcareProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightcareProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightcareProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
