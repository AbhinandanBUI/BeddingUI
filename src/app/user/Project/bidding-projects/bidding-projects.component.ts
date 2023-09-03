import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bidding-projects',
  templateUrl: './bidding-projects.component.html',
  styleUrls: ['./bidding-projects.component.scss']
})
export class BiddingProjectsComponent   {
  biddingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.biddingForm = this.fb.group({
      bidAmount: ['', [Validators.required, Validators.min(1)]],
      bidDescription: ['', [Validators.required]]
    });
  }

  submitBid() {
    if (this.biddingForm.valid) {
      const bidData = this.biddingForm.value;
      console.log('Bid Data:', bidData);
      // Implement logic to send bidData to the server
    }
  }
  get bidamount(){
    return this.biddingForm.controls['bidAmount'].value;
  }
  get biddis(){
    return this.biddingForm.controls['bidDescription'].value;

  }
}
