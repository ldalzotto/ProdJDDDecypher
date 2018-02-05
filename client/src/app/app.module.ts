import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MatButtonModule, MatGridListModule, MatIconModule, MatInputModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {HeaderComponentComponent} from './header-component/header-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DecypherComponent} from './decypher/decypher.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {NotAvailableComponent} from './not-available/not-available.component';
import {FileChangeDirective} from './decypher/directives/FileChangeDirective';
import {DecypherFileApiService} from './decypher/api/DecypherFileApiService';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    DecypherComponent,
    ConfigurationComponent,
    NotAvailableComponent,
    FileChangeDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [HttpClientModule, DecypherFileApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
