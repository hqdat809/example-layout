import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: ItemComponent }],
  },
];

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
  ],
})
export class ItemModule {}
