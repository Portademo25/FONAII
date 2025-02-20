import { Component } from '@angular/core';
import { ModalsComponent } from './modals/modals.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forms',
    imports: [
        ModalsComponent,
        MatToolbarModule,
        MatButtonModule
    ],
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss'
})
export class FormsComponent {
 
  constructor(private router: Router){}

  gotoHome(){
    this.router.navigateByUrl('home')
  }

  gotoRRHH(){
    this.router.navigateByUrl('rrhh')
  }

  gotoEstructura(){
    this.router.navigateByUrl('estructura')
  }

  gotoFasmij(){
    this.router.navigateByUrl('fasmij')
  }

  gotoManual(){
    this.router.navigateByUrl('manual')
  }

  gotoForms(){
    this.router.navigateByUrl('forms')
  }

  gotoPhone(){
    this.router.navigateByUrl('phone')
  }
}
