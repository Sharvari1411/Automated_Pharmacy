import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TedibarComponent } from './tedibar.component';

describe('TedibarComponent', () => {
  let component: TedibarComponent;
  let fixture: ComponentFixture<TedibarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TedibarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TedibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
