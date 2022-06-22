import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImposterBlueComponent } from './imposter-blue.component';

describe('ImposterBlueComponent', () => {
  let component: ImposterBlueComponent;
  let fixture: ComponentFixture<ImposterBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImposterBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImposterBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
