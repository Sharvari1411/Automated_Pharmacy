import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduradesComponent } from './endurades.component';

describe('EnduradesComponent', () => {
  let component: EnduradesComponent;
  let fixture: ComponentFixture<EnduradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnduradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
