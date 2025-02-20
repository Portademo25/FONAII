import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-consejo',
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
    templateUrl: './consejo.component.html',
    styleUrl: './consejo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsejoComponent {
 readonly dialogRef=inject(MatDialogRef<ConsejoComponent>)
}
