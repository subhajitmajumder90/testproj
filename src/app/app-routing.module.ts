import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Part2Component } from './part2/part2.component';
import { ApiformComponent } from './apiform/apiform.component';
import { EditdataComponent } from './editdata/editdata.component';


const routes: Routes = [
  {
    path:'form',
    component: FormComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'dashboard/part2',
    component:Part2Component
  },
  {
    path:'apiform',
    component:ApiformComponent
  },
  { path:'editdata',
    component: EditdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
