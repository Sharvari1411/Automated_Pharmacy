import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinarticleComponent } from './skinarticle.component';

describe('SkinarticleComponent', () => {
  let component: SkinarticleComponent;
  let fixture: ComponentFixture<SkinarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
