import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import  { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
 

@Component({
  selector: 'app-punto-de-cuenta',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './punto-de-cuenta.component.html',
  styleUrl: './punto-de-cuenta.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PuntoDeCuentaComponent {

  readonly dialogRef = inject(MatDialogRef<PuntoDeCuentaComponent>);
}
