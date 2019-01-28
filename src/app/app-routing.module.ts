import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {NavComponent} from './view/nav/nav.component';
import {StudentComponent} from './view/student/student.component';

const routes: Routes = [




  // {
  //   path: '',
  //   component: NavComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent,
  //     },
  //     {
  //       path: 'student',
  //       component: StudentComponent,
  //     }
  //   ]
  // }




  {path: 'dashboard', component: DashboardComponent},
  {path: 'student', component: StudentComponent},

  // {
  // path: 'nav',
  // component: NavComponent,
  // children: [
  // {path: 'dashboard', component: DashboardComponent},
  //   {
  //   path: '',
  //   pathMatch : 'full',
  //   redirectTo: '/nav/dashboard'
  // }

// ]
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
