import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaDeEntregaComponent } from './acta-de-entrega.component';

describe('ActaDeEntregaComponent', () => {
  let component: ActaDeEntregaComponent;
  let fixture: ComponentFixture<ActaDeEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActaDeEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActaDeEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
