import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose,MatDialogRef, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-punto-de-informacion',
  standalone: true,
  imports: [MatButtonModule,MatDialogActions,MatDialogClose, MatDialogContent],
  templateUrl: './punto-de-informacion.component.html',
  styleUrl: './punto-de-informacion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PuntoDeInformacionComponent {
 readonly dialogRef= inject(MatDialogRef<PuntoDeInformacionComponent>)
}
