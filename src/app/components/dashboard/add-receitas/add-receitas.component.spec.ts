import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceitasComponent } from './add-receitas.component';

describe('AddReceitasComponent', () => {
  let component: AddReceitasComponent;
  let fixture: ComponentFixture<AddReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
