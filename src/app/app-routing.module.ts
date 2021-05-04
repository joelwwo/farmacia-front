import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticadoGuard } from './core/guards/autenticado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./publico/publico.module').then((m) => m.PublicoModule),
  },
  {
    path: 'conta',
    loadChildren: () =>
      import('./privado/privado.module').then((m) => m.PrivadoModule),
    canActivate: [AutenticadoGuard],
    canLoad: [AutenticadoGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
