import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  
})

 

export class AboutusComponent implements OnInit {
  data: any = {
    title: 'About Us'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
