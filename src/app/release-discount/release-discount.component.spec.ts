import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDiscountComponent } from './release-discount.component';

describe('ReleaseDiscountComponent', () => {
  let component: ReleaseDiscountComponent;
  let fixture: ComponentFixture<ReleaseDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
