import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartidoPagePageRoutingModule } from './partido-page-routing.module';

import { PartidoPagePage } from './partido-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartidoPagePageRoutingModule
  ],
  declarations: [PartidoPagePage]
})
export class PartidoPagePageModule {}
