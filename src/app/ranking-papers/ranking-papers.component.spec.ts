import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPapersComponent } from './ranking-papers.component';

describe('RankingPapersComponent', () => {
  let component: RankingPapersComponent;
  let fixture: ComponentFixture<RankingPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
