import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  secondHand:any = document.querySelector('.second');
  minuteHand:any = document.querySelector('.minute');
  hourHand:any = document.querySelector('.hour');

  /**
   *
   */
  constructor() {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


  updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  this.secondHand.style.transform = `translate(-50%, -50%) rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  this.minuteHand.style.transform = `translate(-50%, -50%) rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  this.hourHand.style.transform = `translate(-50%, -50%) rotate(${hoursDegrees}deg)`;
  setInterval(()=>this.updateClock(),1000);
}
}
