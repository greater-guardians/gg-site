import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingGuideComponent } from './hunting-guide.component';

describe('HuntingGuideComponent', () => {
  let component: HuntingGuideComponent;
  let fixture: ComponentFixture<HuntingGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuntingGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
