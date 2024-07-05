import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-minuta',
  standalone: true,
  imports: [MatToolbarModule, MatDialogModule, MatButtonModule],
  templateUrl: './minuta.component.html',
  styleUrl: './minuta.component.scss'
})
export class MinutaComponent {

}
