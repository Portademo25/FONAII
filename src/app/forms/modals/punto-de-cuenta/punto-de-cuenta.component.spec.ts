import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDeCuentaComponent } from './punto-de-cuenta.component';

describe('PuntoDeCuentaComponent', () => {
  let component: PuntoDeCuentaComponent;
  let fixture: ComponentFixture<PuntoDeCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntoDeCuentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuntoDeCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
