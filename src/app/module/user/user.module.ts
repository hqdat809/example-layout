import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: UserComponent }],
  },
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
  ],
})
export class UserModule {}
