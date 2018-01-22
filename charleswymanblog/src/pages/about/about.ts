import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
    shownGroup = null;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutPage');
    }
  
    toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    };
    
    isGroupShown(group) {
        return this.shownGroup === group;
    };
  

}
