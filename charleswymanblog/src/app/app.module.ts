import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BlogPage } from '../pages/blog/blog';
import { ListPage } from '../pages/list/list';
import { ArtPage } from '../pages/art/art';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { BlogServiceProvider } from '../providers/blog-service/blog-service';
import { ArtServiceProvider } from '../providers/art-service/art-service';
import { CityServiceProvider } from '../providers/city-service/city-service';

import { AutosizeDirective } from '../directives/autosize/autosize';
import { EmailServiceProvider } from '../providers/email-service/email-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlogPage,
    ListPage,
    ArtPage,
    AboutPage,
    ContactPage,
    AutosizeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BlogPage,
    ListPage,
    ArtPage,
    AboutPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BlogServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArtServiceProvider,
    CityServiceProvider,
    EmailServiceProvider
  ]
})
export class AppModule {}
