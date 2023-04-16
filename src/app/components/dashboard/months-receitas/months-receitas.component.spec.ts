import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsReceitasComponent } from './months-receitas.component';

describe('MonthsReceitasComponent', () => {
  let component: MonthsReceitasComponent;
  let fixture: ComponentFixture<MonthsReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthsReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthsReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
