import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairarticleComponent } from './hairarticle.component';

describe('HairarticleComponent', () => {
  let component: HairarticleComponent;
  let fixture: ComponentFixture<HairarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
