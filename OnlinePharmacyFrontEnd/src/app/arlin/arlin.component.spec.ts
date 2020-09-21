import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArlinComponent } from './arlin.component';

describe('ArlinComponent', () => {
  let component: ArlinComponent;
  let fixture: ComponentFixture<ArlinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArlinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
