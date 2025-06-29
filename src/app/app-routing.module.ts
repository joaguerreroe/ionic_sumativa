import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [authGuard] // aquí usas tu guard
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  
  {
    path: 'repuesto-listar',
    loadChildren: () => import('./pages/repuesto-listar/repuesto-listar.module').then( m => m.RepuestoListarPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'repuesto-crear',
    loadChildren: () => import('./pages/repuesto-crear/repuesto-crear.module').then( m => m.RepuestoCrearPageModule),
    canActivate: [authGuard]
  },
   {
    path: '**', // 🚨 RUTA COMODÍN
    redirectTo: 'home'
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
