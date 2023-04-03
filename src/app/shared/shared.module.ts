import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { HeaderComponent } from '../components/header/header.component';
// import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
// import { AuthInterceptor } from '../services/auth.interceptor';
// import { ErrorInterceptor } from '../services/error.interceptor';
import { FilterPipe } from '../services/search.pipe';
import { MaterialModule } from './material.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropimageDialogComponent } from '../dialog/cropimage-dialog/cropimage-dialog.component';

@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent,
    FilterPipe,
    CropimageDialogComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      timeOut: 4500,
      preventDuplicates: true
    }),
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    ImageCropperModule
  ],
  providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastrModule,
    FilterPipe,
    ReactiveFormsModule,
    MaterialModule,
    ImageCropperModule,
  ]
})
export class SharedModule { }
