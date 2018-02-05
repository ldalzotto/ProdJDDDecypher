import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DecypherComponent} from '../decypher/decypher.component';
import {ConfigurationComponent} from '../configuration/configuration.component';
import {NotAvailableComponent} from '../not-available/not-available.component';

const routes: Routes = [
  {
    path: 'decypher',
    component: DecypherComponent,
  }, {
    path: 'configuration',
    component: ConfigurationComponent
  }, {
    path: '**',
    component: NotAvailableComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
