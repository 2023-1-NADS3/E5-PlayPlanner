import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitosCardComponent } from './debitos-card.component';

describe('DebitosCardComponent', () => {
  let component: DebitosCardComponent;
  let fixture: ComponentFixture<DebitosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitosCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
