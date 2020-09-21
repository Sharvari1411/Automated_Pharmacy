import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveaSoapdesComponent } from './nivea-soapdes.component';

describe('NiveaSoapdesComponent', () => {
  let component: NiveaSoapdesComponent;
  let fixture: ComponentFixture<NiveaSoapdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveaSoapdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveaSoapdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
