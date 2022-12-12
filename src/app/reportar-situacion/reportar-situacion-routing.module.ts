import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarSituacionPage } from './reportar-situacion.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarSituacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarSituacionPageRoutingModule {}
