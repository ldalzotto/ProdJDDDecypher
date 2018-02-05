import {Directive, ElementRef, HostListener} from '@angular/core';
import {DecypherComponent} from '../decypher.component';


@Directive({
  selector: '[FileChangeRead]'
})
export class FileChangeDirective {

  private decypherComponent: DecypherComponent;

  constructor(decypherComponent: DecypherComponent) {
    this.decypherComponent = decypherComponent;
  }

  @HostListener('change') readFileOnChange() {
    this.decypherComponent.saveFiles();
  }


}
