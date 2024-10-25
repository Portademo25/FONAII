import { Component } from '@angular/core';

//Importacion de modulos de la vista home
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';

//importacion de router para las rutas o redireccion
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router){}

  gotoHome(){
     console.log(HomeComponent)
  }

  gotoEstructura(){
    this.router.navigateByUrl('estructura')
  }

  gotoRRHH(){
    this.router.navigateByUrl('rrhh')
  }

  gotoFasmij(){
    this.router.navigateByUrl('fasmij')
  }
  
  gotoPhone(){
    this.router.navigateByUrl('phone')
  }

  gotoManual(){
    this.router.navigateByUrl('manual')
  }

  gotoForms(){
    this.router.navigateByUrl('forms')
  }

  
}
