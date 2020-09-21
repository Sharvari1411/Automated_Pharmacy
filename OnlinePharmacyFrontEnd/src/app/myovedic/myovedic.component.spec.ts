import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyovedicComponent } from './myovedic.component';

describe('MyovedicComponent', () => {
  let component: MyovedicComponent;
  let fixture: ComponentFixture<MyovedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyovedicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyovedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
