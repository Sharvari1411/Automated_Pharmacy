import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApollodesComponent } from './apollodes.component';

describe('ApollodesComponent', () => {
  let component: ApollodesComponent;
  let fixture: ComponentFixture<ApollodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApollodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApollodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
