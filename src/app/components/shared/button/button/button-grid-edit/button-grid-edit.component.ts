import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ButtonBase } from '../button-base';

@Component({
  selector: 'app-button-grid-edit',
  templateUrl: './button-grid-edit.component.html',
  styleUrls: ['./button-grid-edit.component.css']
})
export class ButtonGridEditComponent extends ButtonBase {

  constructor() {
    super();
  }


}
