import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children:[
      {
        path: 'reportar-situacion',
        loadChildren: () => import('./../reportar-situacion/reportar-situacion.module').then( m => m.ReportarSituacionPageModule)
      },
      {
        path: 'mis-situaciones',
        loadChildren: () => import('./../mis-situaciones/mis-situaciones.module').then( m => m.MisSituacionesPageModule)
      },
      {
        path: 'mapa-situaciones',
        loadChildren: () => import('./../mapa-situaciones/mapa-situaciones.module').then( m => m.MapaSituacionesPageModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import('./../noticias/noticias.module').then( m => m.NoticiasPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
