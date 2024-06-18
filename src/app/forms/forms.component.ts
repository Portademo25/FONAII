import { Component } from '@angular/core';
import { ModalsComponent } from './modals/modals.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ModalsComponent
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

}
