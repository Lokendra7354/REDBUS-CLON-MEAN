import { Component } from '@angular/core';
import { Booking } from '../../model/booking.model';
import { BusService } from '../../service/bus.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  selecteditem:string='trips';
  currentcustomer:any=[]
  currentname:string=''
  currentemail:string=''
  mytrip:Booking[]=[]
  handlelistitemclick(selected:string):void{
    this.selecteditem=selected
  }
  constructor(
    private busbooking:BusService
  ){}
  ngOnInit(): void {
    this.currentcustomer=sessionStorage.getItem('Loggedinuser')
    const user=JSON.parse(this.currentcustomer)
    this.currentname=user.name;
    this.currentemail=user.email;
    this.busbooking.getbusmongo(user._id).subscribe((response:any)=>{
      this.mytrip=response
      console.log(this.mytrip)
    })
  }

}
