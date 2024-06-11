import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RrhhComponent } from './rrhh/rrhh.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'rrhh', component:RrhhComponent},
    {path:'', redirectTo:'home',pathMatch:'full'}
];
