import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsAndConsComponent } from './pros-and-cons.component';

describe('ProsAndConsComponent', () => {
  let component: ProsAndConsComponent;
  let fixture: ComponentFixture<ProsAndConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsAndConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsAndConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
