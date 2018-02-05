import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Tab} from './objects/Tab';
import {DecypherComponent} from '../decypher/decypher.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  private tabs: Array<Tab>;

  constructor(public viewContainerRef: ViewContainerRef) {
    this.tabs = [new Tab('Decypher', 'decypher'),
      new Tab('Configuration', 'configuration'),
      new Tab('Contact', 'contact')];
  }

  ngOnInit() {
  }

  public getTabNames(): Array<string> {
    const tabNames: Array<string> = new Array<string>();
    for (const tab of this.tabs) {
      tabNames.push(tab.tabName);
    }
    return tabNames;
  }

  public getTemplatedTabComponentFromTabName(tabName: string): string {
    for (const tab of this.tabs) {
      if (tab.tabName === tabName) {
        return tab.componentName;
      }
    }
  }

}
