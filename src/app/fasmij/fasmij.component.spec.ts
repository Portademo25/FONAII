import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasmijComponent } from './fasmij.component';

describe('FasmijComponent', () => {
  let component: FasmijComponent;
  let fixture: ComponentFixture<FasmijComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FasmijComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FasmijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
