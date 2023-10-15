import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { FormsModule } from '@angular/forms';
import { TopicComponent } from './topic/topic.component';


@NgModule({
  declarations: [
    JobsComponent,
    TopicComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule
  ]
})
export class JobsModule { }
