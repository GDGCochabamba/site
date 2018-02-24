import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWrapperComponent } from './app-wrapper.component';

describe('AppWrapperComponent', () => {
  let component: AppWrapperComponent;
  let fixture: ComponentFixture<AppWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
