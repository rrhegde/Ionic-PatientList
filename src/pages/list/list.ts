import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PatientDetailsPage } from '../patient-details/patient-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{name: string, DOB: string, venue: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [{name:'Sandy, Robby', DOB:'10/10/1987', venue: 'Inpatient'}, 
                  {name:'Krish,Kandy', DOB:'23/9/1990', venue: 'Outpatient'}, 
                  {name:'Bay, Max', DOB:'01/07/2000', venue: 'Inpatient'}, 
                  {name:'Alladin', DOB:'03/03/1999', venue: 'Inpatient'} ];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     name: 'Patient ' + i

    //     // note: 'This is item #' + i,
    //     // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    //}
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PatientDetailsPage, {patient: item});
  }
}
