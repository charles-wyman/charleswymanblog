import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailServiceProvider } from '../../providers/email-service/email-service';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
    contactForm : FormGroup;  
    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public mailService : EmailServiceProvider) {
        this.contactForm = formBuilder.group({
            firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            emailAddress: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            subject: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[aA-zZ0-9_\.\']{1,60}\@[aZ-zZ]{1,60}\.[aA-zZ]*'), Validators.required])],
            message: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
            
        });
    }
  
    submit() {
        //console.log(this.contactForm.controls.firstName.value);
        var info = [{
            'firstName' : this.contactForm.controls.firstName.value,
            'lastName' : this.contactForm.controls.lastName.value,
            'emailAddress ' : this.contactForm.controls.emailAddress.value,
            'subject' : this.contactForm.controls.subject.value,
            'message' : this.contactForm.controls.message.value
        }]; 
        this.mailService.sendMail(info).then(data => {
            console.log('email was sent!');
        });
    }
    
    reset() {
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
