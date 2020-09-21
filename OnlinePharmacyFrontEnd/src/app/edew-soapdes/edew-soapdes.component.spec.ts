import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdewSoapdesComponent } from './edew-soapdes.component';

describe('EdewSoapdesComponent', () => {
  let component: EdewSoapdesComponent;
  let fixture: ComponentFixture<EdewSoapdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdewSoapdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdewSoapdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
