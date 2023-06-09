import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuesButtonComponent } from './revenues-button.component';

describe('RevenuesButtonComponent', () => {
  let component: RevenuesButtonComponent;
  let fixture: ComponentFixture<RevenuesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
