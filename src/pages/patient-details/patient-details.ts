import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatientDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-details',
  templateUrl: 'patient-details.html',
})
export class PatientDetailsPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('patient');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientDetailsPage');
  }

}
