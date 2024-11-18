import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-doblefirma',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
  templateUrl: './doblefirma.component.html',
  styleUrl: './doblefirma.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoblefirmaComponent {

  readonly dialogRef=inject(MatDialogRef<DoblefirmaComponent>)
}
