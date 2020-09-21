import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurevedaComponent } from './cureveda.component';

describe('CurevedaComponent', () => {
  let component: CurevedaComponent;
  let fixture: ComponentFixture<CurevedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurevedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurevedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
