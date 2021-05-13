import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';

// There is only one route for this app and the home or landing page for this app is Address List
const routes: Routes = [
  {
    path: '',
    component: AddressListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
