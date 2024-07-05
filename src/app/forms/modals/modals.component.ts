import { Component, inject, ChangeDetectionStrategy} from '@angular/core';

// vistas de la pagina 
import { InstructivoComponent } from './instructivo/instructivo.component';
import { MemoComponent } from './memo/memo.component';
import { MinutaComponent } from './minuta/minuta.component';
import { OficioComponent } from './oficio/oficio.component';

// componententes y funcionalidad de la pagina
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [ MatButtonModule, MatCardModule],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsComponent {

  readonly dialog = inject(MatDialog);


  openInstructivo(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(InstructivoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openMemo(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MemoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openMinuta(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.dialog.open(MinutaComponent,{
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openOficio(enterAnimationDuration:string, exitAnimationDuration:string): void{
    this.dialog.open(OficioComponent,{
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
