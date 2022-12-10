import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedidasPrevPageRoutingModule } from './medidas-prev-routing.module';

import { MedidasPrevPage } from './medidas-prev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedidasPrevPageRoutingModule
  ],
  declarations: [MedidasPrevPage]
})
export class MedidasPrevPageModule {}
