import { routes } from './../../module/ware-house/ware-house.module';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isExpand = false;
  device = '';
  currentUrl = '';
  @Input() drawer!: MatDrawer;
  @Output() openSidebar = new EventEmitter();

  constructor(
    private router: Router,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private deviceService: DeviceDetectorService
  ) {}

  listSidebarItems = [
    { label: 'sidebar.dashboard', icon: 'dashboard', route: 'dashboard' },
    { label: 'sidebar.item', icon: 'library_add', route: 'item' },
    { label: 'sidebar.notification', icon: 'view_list', route: 'notification' },
    { label: 'sidebar.user', icon: 'group', route: 'user' },
    { label: 'sidebar.search', icon: 'search', route: '' },
  ];

  ngOnInit() {
    if (this.deviceService.isMobile()) {
      this.device = 'mobile';
      this.isExpand = true;
    } else {
      this.device = 'pc';
    }
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route)
      )
      .subscribe((event) => {
        this.currentUrl = event.snapshot.children[0].url[0].path;
      });
  }

  handleOpenSidebar() {
    this.openSidebar.emit();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
