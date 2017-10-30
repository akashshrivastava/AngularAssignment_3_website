import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomComponent2Component } from './bottom-component2.component';

describe('BottomComponent2Component', () => {
  let component: BottomComponent2Component;
  let fixture: ComponentFixture<BottomComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
