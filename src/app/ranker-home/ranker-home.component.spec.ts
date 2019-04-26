import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankerHomeComponent } from './ranker-home.component';

describe('RankerHomeComponent', () => {
  let component: RankerHomeComponent;
  let fixture: ComponentFixture<RankerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
