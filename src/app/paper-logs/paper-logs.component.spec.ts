import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperLogsComponent } from './paper-logs.component';

describe('PaperLogsComponent', () => {
  let component: PaperLogsComponent;
  let fixture: ComponentFixture<PaperLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
