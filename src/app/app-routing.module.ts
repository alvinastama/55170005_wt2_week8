import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { MainMatkulComponent } from './main-matkul/main-matkul.component';
import { MatkulFormComponent } from './matkul-form/matkul-form.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/main'
      },
      {
        path: 'main',
        component: MainMatkulComponent
      },
      {
        path: 'matkul/:id',
        component: MatkulFormComponent
      },
      {
        path: 'matkul',
        component: MatkulFormComponent
      }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
