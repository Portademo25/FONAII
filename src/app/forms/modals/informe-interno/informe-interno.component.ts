import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
    selector: 'app-informe-interno',
    imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule],
    templateUrl: './informe-interno.component.html',
    styleUrl: './informe-interno.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformeInternoComponent {
  readonly dialogRef= inject(MatDialogRef<InformeInternoComponent>)
}
