import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OzivaComponent } from './oziva.component';

describe('OzivaComponent', () => {
  let component: OzivaComponent;
  let fixture: ComponentFixture<OzivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OzivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OzivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
