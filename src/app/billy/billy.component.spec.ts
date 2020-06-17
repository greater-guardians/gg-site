import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillyComponent } from './billy.component';

describe('BillyComponent', () => {
  let component: BillyComponent;
  let fixture: ComponentFixture<BillyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
