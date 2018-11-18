import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
// import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
// import { UserService } from './user.service';

@NgModule({
  // declarations: [UserComponent, UserDetailComponent],
  declarations: [UserDetailComponent],

  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  // providers: [UserService]
})
export class UserModule { }
