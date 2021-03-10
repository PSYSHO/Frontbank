import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRefilComponent } from './transaction-refil.component';

describe('TransactionRefilComponent', () => {
  let component: TransactionRefilComponent;
  let fixture: ComponentFixture<TransactionRefilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionRefilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRefilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
