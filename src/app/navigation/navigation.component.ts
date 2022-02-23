import { Component, EventEmitter, OnInit, Output, Input, Sanitizer} from '@angular/core';
import { NavmenuItem } from './navmenu-item';
import { ViewportScroller } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  // This is how the svg files are being used throughout the site
  constructor(private scroller: ViewportScroller, registerIcon: MatIconRegistry, sanitizer: DomSanitizer) {
    registerIcon.addSvgIcon('facebook',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/facebook.svg'));
    registerIcon.addSvgIcon('google',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/google.svg'));
    registerIcon.addSvgIcon('yelp',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/social/yelp.svg'));
      registerIcon.addSvgIcon('logo',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/'));
  }
  title= "Tamayos";
  byline="Mexican Style Corn"
  phone = "";
  imgUrl = "../assets/images/elote-con-llamas.png"

  menuItems: NavmenuItem[] = [
     {
      label: 'Home',
      title: 'Home',
      anchor: 'home',
    },

    {
      label: 'About Us',
      title: 'About Us',
      anchor: 'aboutUs',
    },

    {
      label: 'Locations',
      title: 'Locations',
      anchor: 'locations',
    },

    // {
    //   label: 'Services',
    //   title: 'Services',
    //   anchor: 'service',
    // },
    
    // {
    //   label: 'Industries',
    //   title: 'Industries',
    //   anchor: 'industries',
    // },

    {
      label: 'Menu',
      title: 'Menu',
      anchor: 'menu',
    }
  ];

  currentAnchor = 'home';
  scrollTo(item: NavmenuItem): void {
    this.currentAnchor = item.anchor;
    this.scroller.scrollToAnchor(item.anchor);
  }

  ngOnInit(): void {
  }

}
