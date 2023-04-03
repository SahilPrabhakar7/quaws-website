import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLoginComponent } from './components/buyer-login/buyer-login.component';
// import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  // {
  //   path: 'auth/login',
  //   redirectTo: 'auth/login'
  // },
  {
    path: '',
    component: BuyerLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
