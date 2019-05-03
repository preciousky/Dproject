import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoResponceComponent } from './player-info-responce.component';

describe('PlayerInfoResponceComponent', () => {
  let component: PlayerInfoResponceComponent;
  let fixture: ComponentFixture<PlayerInfoResponceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInfoResponceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoResponceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
