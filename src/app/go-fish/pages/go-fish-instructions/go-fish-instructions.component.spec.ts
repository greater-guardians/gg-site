import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFishInstructionsComponent } from './go-fish-instructions.component';

describe('GoFishInstructionsComponent', () => {
  let component: GoFishInstructionsComponent;
  let fixture: ComponentFixture<GoFishInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoFishInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFishInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
