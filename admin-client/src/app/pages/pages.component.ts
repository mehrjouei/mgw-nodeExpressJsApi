import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { PreLoadingService } from '../services/pre-loading.service';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  title = 'pages';
  
  sliderCollapsed: boolean = false;
  mobileMode = false;
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private configService: ConfigService,
    private preloadingService:PreLoadingService
  ) {
    this.auth.isSignedIn().subscribe(x => {
      if (!x && !this.auth.checkSignedIn()) {
        this.router.navigate(['/auth/login']);
          
      }
    });

  }

  signout() {
    this.auth.signout();
  }
  ngAfterViewInit() {
    let screenWidth = window.screen.width;
    if (screenWidth < 800) {
      this.mobileMode = true;
      setTimeout(() => {
        this.sliderCollapsed = true;
      }, 200);
    }
  }
  collapseOnClick() {
    if (this.mobileMode) {
      this.sliderCollapsed = true
    }
  }
}
