import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPage } from './alert.page';

const routes: Routes = [
  {
    path: '',
    component: AlertPage,
    data: { title: 'Alert page' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertPageRoutingModule {}
