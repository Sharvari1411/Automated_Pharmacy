import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesdescriptionComponent } from './articlesdescription.component';

describe('ArticlesdescriptionComponent', () => {
  let component: ArticlesdescriptionComponent;
  let fixture: ComponentFixture<ArticlesdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
