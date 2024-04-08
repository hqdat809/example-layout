import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: NotificationComponent }],
  },
];

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
  ],
})
export class NotificationModule {}
