import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { ContentComponent } from './content/content.component';
import { RememberComponent } from './bloom/remember/remember.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarButtonComponent,
    ContentComponent,
    RememberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
