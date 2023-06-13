import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        loadChildren:()=>import('src/app/pages/home/home.routes').then((r)=>r.HOME_ROUTES)
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
