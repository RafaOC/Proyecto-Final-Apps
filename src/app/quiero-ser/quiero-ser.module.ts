import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuieroSerPageRoutingModule } from './quiero-ser-routing.module';

import { QuieroSerPage } from './quiero-ser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuieroSerPageRoutingModule
  ],
  declarations: [QuieroSerPage]
})
export class QuieroSerPageModule {}
