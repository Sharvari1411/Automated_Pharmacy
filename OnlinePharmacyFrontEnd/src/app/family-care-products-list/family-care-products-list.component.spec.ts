import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyCareProductsListComponent } from './family-care-products-list.component';

describe('FamilyCareProductsListComponent', () => {
  let component: FamilyCareProductsListComponent;
  let fixture: ComponentFixture<FamilyCareProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyCareProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyCareProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
