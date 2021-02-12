import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { country } from '../country';
import { CountryserviceService } from '../countryservice.service';

@Component({
  selector: 'app-editcountry',
  templateUrl: './editcountry.component.html',
  styleUrls: ['./editcountry.component.css']
})
export class EditcountryComponent implements OnInit {
  country = new country();

  constructor(private route: Router, private service: CountryserviceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.fetchCountryByIdFromBackEnd(id).subscribe(
      data => {
        console.log("country details received");
        this.country = data;
      },
      error => console.log("error")
    )
  }

  modifyCountryFormSubmit(){
    if(this.country.countryname == "" ||
     this.country.countrycode == "" || this.country.countrycapitalcity == ""){
      window.alert("Please add all details!");
      return false;
    }
    this.service.modifyCountryToBackEnd(this.country).subscribe(
      data =>
      {
          console.log('Country Details Modified Successfully!')
          this.route.navigate(['']);
      },
      error => console.log('error')
    )
    window.alert("Country Details Modified Successfully!");
  }

  goToCountryList(){
    this.route.navigate(['']);
  }
}
