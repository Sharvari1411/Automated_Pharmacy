import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViopatchComponent } from './viopatch.component';

describe('ViopatchComponent', () => {
  let component: ViopatchComponent;
  let fixture: ComponentFixture<ViopatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViopatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViopatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
