import { Component, inject, ChangeDetectionStrategy} from '@angular/core';
import { InstructivoComponent } from './instructivo/instructivo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MemoComponent } from './memo/memo.component';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [ MatButtonModule],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsComponent {

  readonly dialog = inject(MatDialog);


  openInstructivo(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(InstructivoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openMemo(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MemoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
