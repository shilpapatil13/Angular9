import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingAnalysisComponent } from './holding-analysis.component';

describe('HoldingAnalysisComponent', () => {
  let component: HoldingAnalysisComponent;
  let fixture: ComponentFixture<HoldingAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
