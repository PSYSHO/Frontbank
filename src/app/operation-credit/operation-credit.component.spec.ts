import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationCreditComponent } from './operation-credit.component';

describe('OperationComponent', () => {
  let component: OperationCreditComponent;
  let fixture: ComponentFixture<OperationCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
