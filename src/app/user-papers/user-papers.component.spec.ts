import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPapersComponent } from './user-papers.component';

describe('UserPapersComponent', () => {
  let component: UserPapersComponent;
  let fixture: ComponentFixture<UserPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
