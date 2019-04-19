import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseAcceptForHonourComponent } from './release-accept-for-honour.component';

describe('ReleaseAcceptForHonourComponent', () => {
  let component: ReleaseAcceptForHonourComponent;
  let fixture: ComponentFixture<ReleaseAcceptForHonourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseAcceptForHonourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseAcceptForHonourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
