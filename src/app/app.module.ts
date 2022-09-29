import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
// my edit 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule , Route, Routes} from '@angular/router';
import { UserDashboardComponent } from './client/user-dashboard/user-dashboard.component';
import { UserAddComponent } from './client/user-add/user-add.component';
import { UserUpdateComponent } from './client/user-update/user-update.component';
import { UserListComponent } from './client/user-list/user-list.component';
import { userObj } from './client/user-interfaces/user';

const routes:Routes=[
  {path:'register',component:RegisterComponent},
  {path:'login' ,component:LoginComponent},
  {path: 'user-dashboard',component:UserDashboardComponent},
  {path: 'user-list',component:UserListComponent},
  {path: 'user-add' ,component:UserAddComponent},
  {path: 'user-update/:id',component:UserUpdateComponent},
  // {path: '/user-update/',component:UserUpdateComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
