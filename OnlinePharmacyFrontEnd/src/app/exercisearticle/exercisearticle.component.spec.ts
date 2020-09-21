import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisearticleComponent } from './exercisearticle.component';

describe('ExercisearticleComponent', () => {
  let component: ExercisearticleComponent;
  let fixture: ComponentFixture<ExercisearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
