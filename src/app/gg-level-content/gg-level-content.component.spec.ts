import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgLevelContentComponent } from './gg-level-content.component';

describe('GgLevelContentComponent', () => {
  let component: GgLevelContentComponent;
  let fixture: ComponentFixture<GgLevelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgLevelContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GgLevelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
