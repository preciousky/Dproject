import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessHomeComponent } from './access-home.component';

describe('AccessHomeComponent', () => {
  let component: AccessHomeComponent;
  let fixture: ComponentFixture<AccessHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
