import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowarticlesComponent } from './showarticles.component';

describe('ShowarticlesComponent', () => {
  let component: ShowarticlesComponent;
  let fixture: ComponentFixture<ShowarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
