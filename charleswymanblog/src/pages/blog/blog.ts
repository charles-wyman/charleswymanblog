import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogServiceProvider } from '../../providers/blog-service/blog-service';
/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})


export class BlogPage {
    entries: any;
    shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public blogService : BlogServiceProvider) {    
     this.getBlogEntries();
       
  }
  
  getBlogEntries() {
    this.blogService.getEntries().then(data => {
        this.entries = data;
    });
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
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

}
