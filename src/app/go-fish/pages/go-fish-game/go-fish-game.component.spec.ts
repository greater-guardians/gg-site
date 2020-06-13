import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFishGameComponent } from './go-fish-game.component';

describe('GoFishGameComponent', () => {
  let component: GoFishGameComponent;
  let fixture: ComponentFixture<GoFishGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoFishGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFishGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
