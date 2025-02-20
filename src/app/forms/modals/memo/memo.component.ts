import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import  { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
 


@Component({
    selector: 'app-memo',
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
    templateUrl: './memo.component.html',
    styleUrl: './memo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoComponent {

  readonly dialogRef = inject(MatDialogRef<MemoComponent>);
}
