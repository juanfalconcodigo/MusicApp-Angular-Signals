import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { profileGuard } from 'src/app/core/guards/profile.guard';

export const HOME_ROUTES: Routes = [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'main',
                loadComponent:()=>import('src/app/pages/home/views/main/main.component').then(c=>c.MainComponent)
            },
            {
                path:'profile',
                loadComponent:()=>import('src/app/pages/home/views/profile/profile.component').then(c=>c.ProfileComponent),
                canActivate:[profileGuard()]
            },
            {
                path:'',
                pathMatch:'full',
                redirectTo:'main'
            },
            {
                path:'**',
                pathMatch:'full',
                redirectTo:'main'
            }
        ]

    }
];
