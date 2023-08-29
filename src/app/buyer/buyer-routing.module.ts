import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLoginComponent } from './components/buyer-login/buyer-login.component';
import { BuyerSignupComponent } from './components/buyer-signup/buyer-signup.component';
// import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: BuyerLoginComponent
  },
  {
    path: 'signup',
    component: BuyerSignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
