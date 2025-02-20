import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
    selector: 'app-oficio',
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
    templateUrl: './oficio.component.html',
    styleUrl: './oficio.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OficioComponent {
  readonly dialogRef = inject(MatDialogRef<OficioComponent>);
}
