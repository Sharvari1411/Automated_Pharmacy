import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnofooterComponent } from './diagnofooter.component';

describe('DiagnofooterComponent', () => {
  let component: DiagnofooterComponent;
  let fixture: ComponentFixture<DiagnofooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnofooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnofooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
