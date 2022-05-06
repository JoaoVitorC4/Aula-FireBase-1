import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTaskPage } from './list-task.page';

const routes: Routes = [
  {
    path: '',
    component: ListTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTaskPageRoutingModule {}
