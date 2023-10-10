import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalComponent } from './internal.component';

const routes: Routes = [
  {
    path: 'internal',
    component: InternalComponent,
    loadChildren: () =>
      import('./pages/jobs/jobs.module').then((m) => m.JobsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalRoutingModule {}
