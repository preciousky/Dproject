import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseEndorseComponent } from './release-endorse.component';

describe('ReleaseEndorseComponent', () => {
  let component: ReleaseEndorseComponent;
  let fixture: ComponentFixture<ReleaseEndorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseEndorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseEndorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
