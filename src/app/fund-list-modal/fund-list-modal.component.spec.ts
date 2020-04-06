import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundListModalComponent } from './fund-list-modal.component';

describe('FundListModalComponent', () => {
  let component: FundListModalComponent;
  let fixture: ComponentFixture<FundListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
