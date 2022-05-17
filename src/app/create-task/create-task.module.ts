import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTaskPageRoutingModule } from './create-task-routing.module';

import { CreateTaskPage } from './create-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateTaskPageRoutingModule
  ],
  declarations: [CreateTaskPage]
})
export class CreateTaskPageModule {}
