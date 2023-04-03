import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasCardComponent } from './receitas-card.component';

describe('ReceitasCardComponent', () => {
  let component: ReceitasCardComponent;
  let fixture: ComponentFixture<ReceitasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitasCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
