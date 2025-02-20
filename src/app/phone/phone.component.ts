import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



export interface Extensiones {
  name: String;
  position: Number;
  extension: Number;
  contact: String;
}

const ELEMENT_DATA: Extensiones[] = [
{ position: 1,name: 'Atención Al Ciudadano', contact:'Coordinación', extension: 119},
{ position: 2,name: 'Archivo Central', contact: 'Coordinación', extension: 8133},
{ position: 3,name: 'Administracion', contact: 'Director', extension: 8210},
{ position: 4,name: 'Asesoria Juridica', contact:'Director', extension: 8150},
{ position: 5,name: 'Capacitacion', contact:'Director', extension: 8310},
{ position: 6,name: 'Dirección Ejecutiva', contact: 'Director Ejecutivo,', extension: 8131},
{ position: 7,name: '', contact:'Asistente', extension:8132},
{ position: 8,name: 'Fiscalizacion', contact:'Director',extension:8290},
{ position: 9,name: 'Planificacion y Presupuesto', contact:'Director', extension:8230},
{ position: 10,name: 'Proyectos', contact:'Director', extension: 8250},
{ position: 11,name: 'Recaudacion', contact:'Director', extension:8270},
{ position: 12,name:'',contact:'Coordinación',extension:8271},
{ position: 13,name: 'Recepcion', contact:'Recepcion', extension:128},
{ position: 14,name: 'Recursos Humanos',contact:'Director', extension:8170},
{ position: 15,name: 'Tecnologia', contact:'Director', extension:8190}
];


@Component({
    selector: 'app-phone',
    imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule
    ],
    templateUrl: './phone.component.html',
    styleUrl: './phone.component.scss'
})
export class PhoneComponent {

  displayedColumns: string[] = ['position', 'name', 'contact', 'extension'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private router: Router){}

  gotoHome(){
    this.router.navigateByUrl('home')
  }

  gotoRRHH(){
    this.router.navigateByUrl('rrhh')
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

  gotoFasmij(){
    this.router.navigateByUrl('fasmij')
  }

  gotoEstructura(){
    this.router.navigateByUrl('estructura')
  }
}
