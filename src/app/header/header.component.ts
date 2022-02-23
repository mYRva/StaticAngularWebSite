import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: any = {
    // title: 'Professional <strong>Janitorial Services</strong> serving Oregon\'s Willamette Valley',
    // p1: 'We are proud to use environmentally biodegradeable products!',
    imgUrl: './assets/images/2.png',
    imgUrlKornito: './assets/images/kornito.jpg'
  }

  constructor(private registerIcon: MatIconRegistry,sanitizer: DomSanitizer) { 
    registerIcon.addSvgIcon('xslogo',
    sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/xslogo.svg'));
  }


  ngOnInit(): void {
  }
}
