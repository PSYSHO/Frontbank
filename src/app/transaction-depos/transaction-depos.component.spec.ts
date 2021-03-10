import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDeposComponent } from './transaction-depos.component';

describe('TransactionDeposComponent', () => {
  let component: TransactionDeposComponent;
  let fixture: ComponentFixture<TransactionDeposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDeposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDeposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
