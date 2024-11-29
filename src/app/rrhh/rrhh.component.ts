import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router'
import { ModalComponent } from '../rrhh/modal/modal.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-rrhh',
  standalone: true,
  imports: [MatToolbarModule, ModalComponent,MatButtonModule],
  templateUrl: './rrhh.component.html',
  styleUrl: './rrhh.component.scss'
})
export class RrhhComponent {
 constructor (private router: Router){}

 gotoHome(){
  this.router.navigateByUrl('home')
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

 gotoForms(){
  this.router.navigateByUrl('forms')
 }

 gotoPhone(){
  this.router.navigateByUrl('phone')
 }

}
