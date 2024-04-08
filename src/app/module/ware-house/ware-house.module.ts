import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WareHouseComponent } from './ware-house.component';

export const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: WareHouseComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WareHouseModule {}
