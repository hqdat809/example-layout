import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

export const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: DashboardComponent }],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
