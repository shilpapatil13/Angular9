import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareFundComponent } from './compare-fund.component';

describe('CompareFundComponent', () => {
  let component: CompareFundComponent;
  let fixture: ComponentFixture<CompareFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
