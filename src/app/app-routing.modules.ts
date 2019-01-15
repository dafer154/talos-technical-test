import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {DetailPostComponent} from './detail-post/detail-post.component';
import { CreatePostComponent} from './create-post/create-post.component';
import {NotFoundComponent} from './not-found/not-found.component';

const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'post/:id', component: DetailPostComponent},
    {path: 'createPost', component: CreatePostComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
