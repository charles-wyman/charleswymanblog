import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ArtServiceProvider } from '../../providers/art-service/art-service';

/**
 * Generated class for the ArtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-art',
  templateUrl: 'art.html',
})
export class ArtPage {
    imgs: Array<string> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public artService : ArtServiceProvider, public loadingCtrl : LoadingController) {
    this.imgs= ["assets/imgs/1.jpg", 
                "assets/imgs/2.jpg", 
                "assets/imgs/3.jpg", 
                "assets/imgs/4.jpg", 
                "assets/imgs/5.jpg", 
                "assets/imgs/6.jpg", 
                "assets/imgs/7.jpg",
                "assets/imgs/8.jpg",
                "assets/imgs/9.jpg"];
  }

    presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtPage');
    //this.presentLoading();
  }
  
  
  

}
