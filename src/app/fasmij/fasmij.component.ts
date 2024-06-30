import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-fasmij',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './fasmij.component.html',
  styleUrl: './fasmij.component.scss'
})
export class FasmijComponent {

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
