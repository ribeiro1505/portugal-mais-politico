import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartidoPagePage } from './partido-page.page';

const routes: Routes = [
  {
    path: '',
    component: PartidoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidoPagePageRoutingModule {}
