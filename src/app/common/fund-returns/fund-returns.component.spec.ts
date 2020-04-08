import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundReturnsComponent } from './fund-returns.component';

describe('FundReturnsComponent', () => {
  let component: FundReturnsComponent;
  let fixture: ComponentFixture<FundReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
