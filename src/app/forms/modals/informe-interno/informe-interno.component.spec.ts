import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeInternoComponent } from './informe-interno.component';

describe('InformeInternoComponent', () => {
  let component: InformeInternoComponent;
  let fixture: ComponentFixture<InformeInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeInternoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformeInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
