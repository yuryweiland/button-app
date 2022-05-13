import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstScreenComponent } from './entities/components/first-screen/first-screen.component';
import { SecondScreenComponent } from './entities/components/second-screen/second-screen.component';

const routes: Routes = [
  {
    path: '',
    component: FirstScreenComponent
  },
  {
    path: 'second',
    component: SecondScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
