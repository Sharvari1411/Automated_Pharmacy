import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BProtindesComponent } from './bprotindes.component';

describe('BProtindesComponent', () => {
  let component: BProtindesComponent;
  let fixture: ComponentFixture<BProtindesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BProtindesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BProtindesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
