import { Component } from '@angular/core';
import { appSettings } from '../config/app.management';
import { pagesMenuList } from '../config/menuList';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  ismenudropdownopen: string = 'Dashboard';
  isDropdownOpen: boolean = false;
  isaccount: boolean = false;
  ismisc: boolean = false;
  isUI: boolean = false;
  istable: boolean = false;
  isform: boolean = false;
  isother: boolean = false;
  islayout: string = 'accountsetting';
  mymenulist: any;
  appconfig:any;
  menuItems =pagesMenuList;

  constructor() {
this.appconfig = appSettings;


  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  toggleDropdown(name: string) {
    debugger
    switch (name) {
      case 'Dashboard':
        this.ismenudropdownopen = name;
        break;
        case name:
          this.ismenudropdownopen = name;
        break;

      default:
        this.ismenudropdownopen = 'accountsetting';
        break;
    }
    // if (name != this.islayout) {
    //   this.islayout = name;
    // } else {
    //   this.islayout = '';
    // }
  }
}
