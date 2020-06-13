import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFishComponent } from './go-fish.component';

describe('GoFishComponent', () => {
  let component: GoFishComponent;
  let fixture: ComponentFixture<GoFishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoFishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
