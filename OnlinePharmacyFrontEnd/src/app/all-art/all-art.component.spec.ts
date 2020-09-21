import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtComponent } from './all-art.component';

describe('AllArtComponent', () => {
  let component: AllArtComponent;
  let fixture: ComponentFixture<AllArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
