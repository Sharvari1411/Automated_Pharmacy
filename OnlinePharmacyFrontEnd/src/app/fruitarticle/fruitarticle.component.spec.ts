import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitarticleComponent } from './fruitarticle.component';

describe('FruitarticleComponent', () => {
  let component: FruitarticleComponent;
  let fixture: ComponentFixture<FruitarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
