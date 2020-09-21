import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GNCComponent } from './gnc.component';

describe('GNCComponent', () => {
  let component: GNCComponent;
  let fixture: ComponentFixture<GNCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GNCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GNCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
