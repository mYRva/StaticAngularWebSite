import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent{

data: any = {
    title: 'Services',
    list: [
      {
        title: 'Janitorial Services',
        icon: '',
        sublist: [
          'General Janitorial Services',
        ]
      },
      {
        title: 'Floors',
        icon: 'format_color_fill',
        sublist: [
          'Carpet Cleaning',
          'Strip & Wax',
          'Buff',
          'Floor Maintenance',
        ]
      },
      {
        title: 'Windows',
        icon: 'border_all',
        sublist: [
          'Window Washing',
        ]
      }
    ]
  };

  constructor() { }


}
