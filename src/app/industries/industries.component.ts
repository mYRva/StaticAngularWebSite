import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})

export class IndustriesComponent{
  data: any = {
    title: 'Industries',
    list: [
      {
        title: 'Healthcare',
        icon: 'local_hospital',
        sublist: [
          'Dental Offices',
          'Medical Offices',
          'Dialysis Clinics',
          'Outpatient Facilities',
          'Physical Therapy',
          'Veterinarian Offices'
        ]
      },
      {
        title: 'Commercial',
        icon: 'business',
        sublist: [
          'Commercial Offices',
          'Retail',
          'Grocery',
          'Education',
          'Auto Dealerships',
          'Office Complexes',
          'Chain Drug Stores',
          'Light Industrial'
        ]
      },
      {
        title: 'Religious Facilities',
        icon: '✟ ✡',
        sublist: [
          'Churches',
          'Synagogues',
          'Mosques',
          'Other religious buildings'
        ]
      }
    ]
  };

  constructor(registerIcon: MatIconRegistry, sanitizer: DomSanitizer) {
  }

}
