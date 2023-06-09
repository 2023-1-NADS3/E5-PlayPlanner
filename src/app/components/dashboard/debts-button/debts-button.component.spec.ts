import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtsButtonComponent } from './debts-button.component';

describe('DebtsButtonComponent', () => {
  let component: DebtsButtonComponent;
  let fixture: ComponentFixture<DebtsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
