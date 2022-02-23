import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Message } from '../sharedservices/email/emailmessage';
import { EmailserviceService } from '../sharedservices/email/emailservice.service';
import { ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MenuComponent {
  data: any = {
    title: 'Menu',
    // list: [
    //   {
    //     title: 'Healthcare',
    //     icon: 'local_hospital',
    //     sublist: [
    //       'Dental Offices',
    //       'Medical Offices',
    //       'Dialysis Clinics',
    //       'Outpatient Facilities',
    //       'Physical Therapy',
    //       'Veterinarian Offices'
    //     ]
    //   },
    //   {
    //     title: 'Commercial',
    //     icon: 'business',
    //     sublist: [
    //       'Commercial Offices',
    //       'Retail',
    //       'Grocery',
    //       'Education',
    //       'Auto Dealerships',
    //       'Office Complexes',
    //       'Chain Drug Stores',
    //       'Light Industrial'
    //     ]
    //   },
    //   {
    //     title: 'Religious Facilities',
    //     icon: '✟ ✡',
    //     sublist: [
    //       'Churches',
    //       'Synagogues',
    //       'Mosques',
    //       'Other religious buildings'
    //     ]
    //   }
    // ]
  };


  showDiv = {
    elotes : true,
    esquites : false,
    tostitos : false
  };

   


}
