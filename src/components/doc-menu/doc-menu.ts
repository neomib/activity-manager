import { Component } from '@angular/core';

/**
 * Generated class for the DocMenu component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'doc-menu',
  templateUrl: 'doc-menu.html'
})
export class DocMenu {

  text: string;

  constructor() {
    console.log('Hello DocMenu Component');
    this.text = 'Hello World';
  }

}
