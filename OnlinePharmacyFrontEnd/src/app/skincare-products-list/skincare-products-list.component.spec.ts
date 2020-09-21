import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareProductsListComponent } from './skincare-products-list.component';

describe('SkincareProductsListComponent', () => {
  let component: SkincareProductsListComponent;
  let fixture: ComponentFixture<SkincareProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkincareProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkincareProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
