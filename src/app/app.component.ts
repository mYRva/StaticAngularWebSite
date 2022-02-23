import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'genuineapp';
  constructor() {
    window.addEventListener("scroll", function() {
      
      let home      = document.getElementById('home');
      let aboutUs   = document.getElementById('aboutUs');
      let locations = document.getElementById('locations');
      let contactus = document.getElementById('contactus');
      let menu      = document.getElementById('menu');

      let homeMenu = (<HTMLElement>document.querySelector(`#home-menu`))
      let aboutUsMenu = (<HTMLElement>document.querySelector(`#aboutUs-menu`))
      let locationsMenu = (<HTMLElement>document.querySelector(`#locations-menu`))
      let contactusMenu = (<HTMLElement>document.querySelector(`#contactus-menu`))
      let menuMenu = (<HTMLElement>document.querySelector(`#menu-menu`))

      if(homeMenu)
        homeMenu.classList.remove('active');
      if(aboutUsMenu)
        aboutUsMenu.classList.remove('active');
      if(locationsMenu)
        locationsMenu.classList.remove('active');   
      if(menuMenu)
        menuMenu.classList.remove('active');

      if (aboutUs && window.scrollY < aboutUs.offsetTop) {
        homeMenu.classList.add('active');
      }
    
      if (aboutUs && window.scrollY >= aboutUs.offsetTop && locations && window.scrollY < locations.offsetTop ) {
        aboutUsMenu.classList.add('active');
      }
    
      if (locations && window.scrollY >= locations.offsetTop && window.scrollY <= locations.offsetTop ) {
        locationsMenu.classList.add('active');
      }    
    
      if (menu && window.scrollY >= menu.offsetTop) {
        menuMenu.classList.add('active');
      }
      
    });
  }
}
