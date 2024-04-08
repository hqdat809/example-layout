import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-layout';
  device = '';
  showFiller = false;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    if (this.deviceService.isDesktop()) {
      this.device = 'pc';
    } else {
      this.device = 'mobile';
    }
  }
}
