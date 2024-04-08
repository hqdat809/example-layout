import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() openSidebar = new EventEmitter();
  device = '';

  constructor(
    private translate: TranslateService,
    private deviceService: DeviceDetectorService
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    if (this.deviceService.isMobile()) {
      this.device = 'mobile';
    } else {
      this.device = 'pc';
    }
  }

  handleOpenSidebar() {
    console.log('open');
    this.openSidebar.emit();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
