import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SideBarModule } from '../../../../libs/layout/feature-layout/src/lib/side-bar/side-bar.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,SideBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
