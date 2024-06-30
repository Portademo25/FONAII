import { Component, inject, ChangeDetectionStrategy} from '@angular/core';
import { InstructivoComponent } from './instructivo/instructivo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MemoComponent } from './memo/memo.component';
import { MinutaComponent } from './minuta/minuta.component';
import { OficioComponent } from './oficio/oficio.component';

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

  openMinuta(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.dialog.open(MinutaComponent,{
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openOficio(enterAnimationDuration:string, exitAnimationDuration:string): void{
    this.dialog.open(OficioComponent,{
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
