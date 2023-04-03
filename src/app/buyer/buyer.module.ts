import { NgModule } from '@angular/core';

import { BuyerLoginComponent } from './components/buyer-login/buyer-login.component';
import { SharedModule } from '../shared/shared.module';
import { BuyerRoutingModule } from './buyer-routing.module';
// import { DownloadDirective } from '../services/download/download.directive';

@NgModule({
  declarations: [BuyerLoginComponent],
  imports: [
    SharedModule,
    BuyerRoutingModule,
    // DownloadDirective
  ]
})
export class BuyerModule { }
