import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilatumSoapdesComponent } from './oilatum-soapdes.component';

describe('OilatumSoapdesComponent', () => {
  let component: OilatumSoapdesComponent;
  let fixture: ComponentFixture<OilatumSoapdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilatumSoapdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilatumSoapdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
