import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPaperCardComponent } from './ranking-paper-card.component';

describe('RankingPaperCardComponent', () => {
  let component: RankingPaperCardComponent;
  let fixture: ComponentFixture<RankingPaperCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingPaperCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingPaperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
