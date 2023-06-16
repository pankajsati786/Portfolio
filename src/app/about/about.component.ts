import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() sectionName= '';
  tablinks: Element[] | undefined;
  tabcontents: Element[] | undefined;


 openTab(tabname:any, event: Event)
  {
    this.tablinks= Array.from(document.getElementsByClassName('tab-links'));
   this. tabcontents = Array.from(document.getElementsByClassName('tab-contents'));
      for( let tablink of this.tablinks)
      {
          tablink.classList.remove('active-link')
      }
      for( let tabConents of this.tabcontents)
      {
        tabConents.classList.remove('active-tab')
  
      }
      const targetElement = event.target as HTMLElement;
      targetElement.classList.add('active-link');
      const tabContentElement = document.getElementById(tabname);
      if (tabContentElement) {
        tabContentElement.classList.add('active-tab');
      }


     
  }
}
