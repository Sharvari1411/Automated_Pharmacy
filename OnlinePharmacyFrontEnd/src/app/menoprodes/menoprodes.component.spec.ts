import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenoprodesComponent } from './menoprodes.component';

describe('MenoprodesComponent', () => {
  let component: MenoprodesComponent;
  let fixture: ComponentFixture<MenoprodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenoprodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenoprodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
