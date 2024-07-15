import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatDialogModule, MatDialogActions,MatDialogClose, MatDialogRef, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-informe-final-de-comision',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
  templateUrl: './informe-final-de-comision.component.html',
  styleUrl: './informe-final-de-comision.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformeFinalDeComisionComponent {
  readonly dialogRef = inject(MatDialogRef<InformeFinalDeComisionComponent>);
}
