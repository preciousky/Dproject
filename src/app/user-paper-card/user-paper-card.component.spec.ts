import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaperCardComponent } from './user-paper-card.component';

describe('UserPaperCardComponent', () => {
  let component: UserPaperCardComponent;
  let fixture: ComponentFixture<UserPaperCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaperCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
