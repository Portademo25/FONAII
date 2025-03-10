import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructivoComponent } from './instructivo.component';

describe('InstructivoComponent', () => {
  let component: InstructivoComponent;
  let fixture: ComponentFixture<InstructivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
