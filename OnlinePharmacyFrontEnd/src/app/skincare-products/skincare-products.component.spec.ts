import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareProductsComponent } from './skincare-products.component';

describe('SkincareProductsComponent', () => {
  let component: SkincareProductsComponent;
  let fixture: ComponentFixture<SkincareProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkincareProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkincareProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
