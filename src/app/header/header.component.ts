import { Component, OnInit } from '@angular/core';
import { Constants } from '../global/constant'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  constants = Constants;
  menuConstants = Constants.menu;
  isMenuCollapsed = true;

  ngOnInit(): void {
  }

  clickMe(menuLinkClickStatus) {
    console.log(menuLinkClickStatus, this.isMenuCollapsed);
  }
}
