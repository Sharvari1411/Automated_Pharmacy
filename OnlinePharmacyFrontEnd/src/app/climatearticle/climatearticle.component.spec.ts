import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatearticleComponent } from './climatearticle.component';

describe('ClimatearticleComponent', () => {
  let component: ClimatearticleComponent;
  let fixture: ComponentFixture<ClimatearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
