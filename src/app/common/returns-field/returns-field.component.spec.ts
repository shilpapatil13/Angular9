import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsFieldComponent } from './returns-field.component';

describe('ReturnsFieldComponent', () => {
  let component: ReturnsFieldComponent;
  let fixture: ComponentFixture<ReturnsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
