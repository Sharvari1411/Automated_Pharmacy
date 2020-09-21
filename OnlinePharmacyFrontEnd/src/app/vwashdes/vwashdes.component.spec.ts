import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VWashdesComponent } from './vwashdes.component';

describe('VWashdesComponent', () => {
  let component: VWashdesComponent;
  let fixture: ComponentFixture<VWashdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VWashdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VWashdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
