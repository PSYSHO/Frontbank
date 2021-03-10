import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDepositsComponent } from './operation-deposits.component';

describe('OperationDepositsComponent', () => {
  let component: OperationDepositsComponent;
  let fixture: ComponentFixture<OperationDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationDepositsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
