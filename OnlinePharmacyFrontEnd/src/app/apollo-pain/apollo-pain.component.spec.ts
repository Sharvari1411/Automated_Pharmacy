import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloPainComponent } from './apollo-pain.component';

describe('ApolloPainComponent', () => {
  let component: ApolloPainComponent;
  let fixture: ComponentFixture<ApolloPainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApolloPainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
