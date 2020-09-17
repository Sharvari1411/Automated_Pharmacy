import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdiagnosticsComponent } from './showdiagnostics.component';

describe('ShowdiagnosticsComponent', () => {
  let component: ShowdiagnosticsComponent;
  let fixture: ComponentFixture<ShowdiagnosticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdiagnosticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
