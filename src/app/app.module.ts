import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* File routing */
import { AppRoutingModule } from './app-routing.modules';

/* File Service*/
import {PostService} from './services/post.service';

//HttpClient
import { HttpClientModule } from '@angular/common/http';

//Forms in Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailPostComponent,
    CreatePostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
