import { Component, ChangeDetectionStrategy, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import  { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
 
@Component({
  selector: 'app-instructivo',
  standalone: true,
  imports: [ MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './instructivo.component.html',
  styleUrl: './instructivo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructivoComponent {
  
  readonly dialogRef = inject(MatDialogRef<InstructivoComponent>);
}
