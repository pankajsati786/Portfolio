import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isSideNavOpen: boolean = false;
  closeSideNav(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
      if(this.isSideNavOpen==true)
      this.isSideNavOpen = false;
      else
      this.isSideNavOpen=true
    }
  }
}
