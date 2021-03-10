import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionExternalComponent } from './transaction-external.component';

describe('TransactionExternalComponent', () => {
  let component: TransactionExternalComponent;
  let fixture: ComponentFixture<TransactionExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionExternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
