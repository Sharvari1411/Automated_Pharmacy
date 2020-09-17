import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdoctorsComponent } from './showdoctors.component';

describe('ShowdoctorsComponent', () => {
  let component: ShowdoctorsComponent;
  let fixture: ComponentFixture<ShowdoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
