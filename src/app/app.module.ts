import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from './auth.interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminModule } from './admin/admin.module';
import { firebaseConfig } from './firebase.config';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    StarComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    EditProductComponent,
    PageNotFoundComponent,
    AdminDashboardComponent,
    PostComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, AuthService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
