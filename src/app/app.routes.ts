import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./module/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'item',
    loadChildren: () =>
      import('./module/item/item.module').then((m) => m.ItemModule),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./module/notification/notification.module').then(
        (m) => m.NotificationModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./module/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'ware-house',
    loadChildren: () =>
      import('./module/ware-house/ware-house.module').then(
        (m) => m.WareHouseModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
