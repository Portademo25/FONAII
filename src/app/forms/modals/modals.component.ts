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
import { PuntoDeCuentaComponent } from './punto-de-cuenta/punto-de-cuenta.component';
import { InformeFinalDeComisionComponent } from './informe-final-de-comision/informe-final-de-comision.component';
import { InformeInternoComponent } from './informe-interno/informe-interno.component';
import { ActaDeEntregaComponent } from './acta-de-entrega/acta-de-entrega.component';
import { PuntoDeInformacionComponent } from './punto-de-informacion/punto-de-informacion.component';
import { ConsejoComponent } from './consejo/consejo.component';


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

  openPunto(enterAnimationDuration:string, exitAnimationDuration:string): void{
    this.dialog.open(PuntoDeCuentaComponent,{
      width:'350px',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }


  openComision(enterAnimationDuration:string, exitAnimationDuration:string): void{
    this.dialog.open(InformeFinalDeComisionComponent,{
      width:'350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  } 

  openInterno(enterAnimationDuration:string, exitAnimationDuration:string): void{
    this.dialog.open(InformeInternoComponent,{
      width:'350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openEntrega(enterAnimationDuration:string, exitAnimationDuration:string): void{
    this.dialog.open(ActaDeEntregaComponent,{
      width:'350px',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  openInforme(enterAnimationDuration:string, exitAnimationDuration:string): void{
    this.dialog.open(PuntoDeInformacionComponent,{
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openConsejo(enterAnimationDuration:string, exitAnimationDuration:string): void{
    this.dialog.open(ConsejoComponent,{
      width:'350px',
      enterAnimationDuration,
      exitAnimationDuration
    })
  }
}
