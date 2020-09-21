import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaincareProductsListComponent } from './paincare-products-list.component';

describe('PaincareProductsListComponent', () => {
  let component: PaincareProductsListComponent;
  let fixture: ComponentFixture<PaincareProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaincareProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaincareProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
