import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuieroSerPage } from './quiero-ser.page';

const routes: Routes = [
  {
    path: '',
    component: QuieroSerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuieroSerPageRoutingModule {}
