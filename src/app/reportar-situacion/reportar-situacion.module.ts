import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarSituacionPageRoutingModule } from './reportar-situacion-routing.module';

import { ReportarSituacionPage } from './reportar-situacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarSituacionPageRoutingModule
  ],
  declarations: [ReportarSituacionPage]
})
export class ReportarSituacionPageModule {}
