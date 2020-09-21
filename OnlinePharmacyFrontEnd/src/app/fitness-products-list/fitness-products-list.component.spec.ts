import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessProductsListComponent } from './fitness-products-list.component';

describe('FitnessProductsListComponent', () => {
  let component: FitnessProductsListComponent;
  let fixture: ComponentFixture<FitnessProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
