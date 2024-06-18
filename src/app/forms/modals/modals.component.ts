import { Component } from '@angular/core';
import { InstructivoComponent } from './instructivo/instructivo.component';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [ InstructivoComponent],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss'
})
export class ModalsComponent {

}
