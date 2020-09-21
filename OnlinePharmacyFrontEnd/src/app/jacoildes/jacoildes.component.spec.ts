import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacoildesComponent } from './jacoildes.component';

describe('JacoildesComponent', () => {
  let component: JacoildesComponent;
  let fixture: ComponentFixture<JacoildesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacoildesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacoildesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
