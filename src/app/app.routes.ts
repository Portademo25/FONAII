import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RrhhComponent } from './rrhh/rrhh.component';
import { FormsComponent } from './forms/forms.component';
import { PhoneComponent } from './phone/phone.component';
import { EstructuraComponent } from './estructura/estructura.component';
import { FasmijComponent } from './fasmij/fasmij.component';
import { ManualComponent } from './manual/manual.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'rrhh', component:RrhhComponent},
    {path:'forms', component:FormsComponent},
    {path:'phone', component:PhoneComponent},
    {path:'estructura', component: EstructuraComponent},
    {path:'fasmij', component:FasmijComponent},
    {path:'manual', component:ManualComponent},
    {path:'', redirectTo:'home',pathMatch:'full'}
];
