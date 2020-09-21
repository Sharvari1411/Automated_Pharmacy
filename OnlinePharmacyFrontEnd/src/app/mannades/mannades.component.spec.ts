import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannadesComponent } from './mannades.component';

describe('MannadesComponent', () => {
  let component: MannadesComponent;
  let fixture: ComponentFixture<MannadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
