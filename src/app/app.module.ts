import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatastoreModule } from 'src/lib/datastore.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DatastoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
