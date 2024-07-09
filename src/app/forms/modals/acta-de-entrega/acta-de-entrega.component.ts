import { Component, inject, ChangeDetectionStrategy} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose, MatDialogRef, MatDialogContent, MatDialogTitle, MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-acta-de-entrega',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './acta-de-entrega.component.html',
  styleUrl: './acta-de-entrega.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActaDeEntregaComponent {
  readonly dialogRef= inject(MatDialogRef)
}
