import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDeInformacionComponent } from './punto-de-informacion.component';

describe('PuntoDeInformacionComponent', () => {
  let component: PuntoDeInformacionComponent;
  let fixture: ComponentFixture<PuntoDeInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntoDeInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuntoDeInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
