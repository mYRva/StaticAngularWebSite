import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  data: any = {
    fb: {
      url: 'https://www.facebook.com/Tamayos-CORN-354247892277092/',
      title: 'Follow us on Facebook',
      icon: 'facebook',
    },
    bond: '',
    copyright: 'Copyright © 2022'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
