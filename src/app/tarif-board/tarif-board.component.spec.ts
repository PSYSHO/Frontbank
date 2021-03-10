import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifBoardComponent } from './tarif-board.component';

describe('TarifBoardComponent', () => {
  let component: TarifBoardComponent;
  let fixture: ComponentFixture<TarifBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
