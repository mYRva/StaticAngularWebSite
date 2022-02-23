import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})

export class LocationsComponent{

data: any = {
    title: 'Locations',
    list: [
      {
        title: 'Portland',
        icon: './assets/icons/location.png',
        sublist: [
          'General Janitorial Services',
        ]
      },
      {
        title: 'Salem',
        icon: './assets/icons/location.png',
        sublist: [
          'Carpet Cleaning',
          'Strip & Wax',
          'Buff',
          'Floor Maintenance',
        ]
      },
      {
        title: 'HilssBoro',
        icon: './assets/icons/location.png',
        sublist: [
          'Window Washing',
        ]
      }
    ]
  };

  constructor() { }


}
