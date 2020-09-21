import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusoftSoapdesComponent } from './nusoft-soapdes.component';

describe('NusoftSoapdesComponent', () => {
  let component: NusoftSoapdesComponent;
  let fixture: ComponentFixture<NusoftSoapdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusoftSoapdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusoftSoapdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
