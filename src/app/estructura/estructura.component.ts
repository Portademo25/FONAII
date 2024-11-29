import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estructura',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule],
  templateUrl: './estructura.component.html',
  styleUrl: './estructura.component.scss'
})
export class EstructuraComponent {

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

  gotoManual(){
    this.router.navigateByUrl('manual')
  }

  gotoFasmij(){
    this.router.navigateByUrl('fasmij')
  }

  gotoForms(){
    this.router.navigateByUrl('forms')
  }

  gotoPhone(){
    this.router.navigateByUrl('phone')
  }
}
