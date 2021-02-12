import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { country } from '../country';
import { CountryserviceService } from '../countryservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {
  country = new country();

  constructor(private route: Router, private service: CountryserviceService) { }

  ngOnInit() {
  }

  addCountryFormSubmit(){
    if(this.country.countryname == null ||
       this.country.countrycode == null || this.country.countrycapitalcity == null){
        window.alert("Please add all details!");
        return false;
       }
    this.service.addCountryToBackEnd(this.country).subscribe(
      data =>
      {
          console.log('Country Details Added Successfully!')
      },
      error => console.log('error')
    )
      window.alert("Country Details Added Successfully!");
      this.route.navigate(['']);
  }

  goToCountryList(){
    this.route.navigate(['']);
  }
}
