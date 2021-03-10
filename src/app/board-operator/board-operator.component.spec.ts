import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOperatorComponent } from './board-operator.component';

describe('BoardOperatorComponent', () => {
  let component: BoardOperatorComponent;
  let fixture: ComponentFixture<BoardOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
