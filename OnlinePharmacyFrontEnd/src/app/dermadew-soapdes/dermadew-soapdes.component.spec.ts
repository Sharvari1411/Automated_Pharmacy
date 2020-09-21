import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DermadewSoapdesComponent } from './dermadew-soapdes.component';

describe('DermadewSoapdesComponent', () => {
  let component: DermadewSoapdesComponent;
  let fixture: ComponentFixture<DermadewSoapdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DermadewSoapdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DermadewSoapdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
