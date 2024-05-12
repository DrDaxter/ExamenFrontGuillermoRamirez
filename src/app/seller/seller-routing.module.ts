import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInformationComponent } from './pages/add-information/add-information.component';
import { ListInformationComponent } from './pages/list-information/list-information.component';
import { EditInformationComponent } from './pages/edit-information/edit-information.component';

const routes: Routes = [
  {
    path: 'add-information',
    component: AddInformationComponent
  },
  {
    path: 'list-information',
    component: ListInformationComponent
  },
  {
    path: 'edit-information',
    component: EditInformationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
