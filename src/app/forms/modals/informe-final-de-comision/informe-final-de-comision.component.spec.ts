import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeFinalDeComisionComponent } from './informe-final-de-comision.component';

describe('InformeFinalDeComisionComponent', () => {
  let component: InformeFinalDeComisionComponent;
  let fixture: ComponentFixture<InformeFinalDeComisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeFinalDeComisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformeFinalDeComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
