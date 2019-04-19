import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasePressComponent } from './release-press.component';

describe('ReleasePressComponent', () => {
  let component: ReleasePressComponent;
  let fixture: ComponentFixture<ReleasePressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasePressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasePressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
