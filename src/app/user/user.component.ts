import { Component } from '@angular/core';
import { appSettings } from '../config/app.management';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  myconfig = appSettings;
  openDropdown(){
    document.getElementById('navbarDropdown')?.click();
  }
}
