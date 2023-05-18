import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'home',
        loadComponent:()=>import('src/app/pages/home/home.component').then((c)=>c.HomeComponent)
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'**',
        pathMatch:'full',
        redirectTo:'home' 
    }
];
