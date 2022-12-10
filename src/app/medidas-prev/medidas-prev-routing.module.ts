import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedidasPrevPage } from './medidas-prev.page';

const routes: Routes = [
  {
    path: '',
    component: MedidasPrevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedidasPrevPageRoutingModule {}
