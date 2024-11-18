import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoblefirmaComponent } from './doblefirma.component';

describe('DoblefirmaComponent', () => {
  let component: DoblefirmaComponent;
  let fixture: ComponentFixture<DoblefirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoblefirmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoblefirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
