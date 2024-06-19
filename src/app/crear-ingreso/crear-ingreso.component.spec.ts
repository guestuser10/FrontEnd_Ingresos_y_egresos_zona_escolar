import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIngresoComponent } from './crear-ingreso.component';

describe('CrearIngresoComponent', () => {
  let component: CrearIngresoComponent;
  let fixture: ComponentFixture<CrearIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearIngresoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
