import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseRankComponent } from './release-rank.component';

describe('ReleaseRankComponent', () => {
  let component: ReleaseRankComponent;
  let fixture: ComponentFixture<ReleaseRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
