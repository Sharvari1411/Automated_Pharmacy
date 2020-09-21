import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrixComponent } from './nutrix.component';

describe('NutrixComponent', () => {
  let component: NutrixComponent;
  let fixture: ComponentFixture<NutrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
