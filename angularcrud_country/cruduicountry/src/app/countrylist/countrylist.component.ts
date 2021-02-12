import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { country } from '../country';
import { CountryserviceService } from '../countryservice.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  countryList: country[];
  constructor(private service: CountryserviceService, private route: Router) { }

  ngOnInit() {
    this.service.fetchCountryListFromBackEnd().subscribe(
      data=>{
        console.log("response received!");
        this.countryList=data;
      },
      error=> console.log("error received")
    )
  }

    goToAddCountry(){
      this.route.navigate(['/addcountry']);
    }

    goToModifyCountry(id: number){
      console.log("id"+id);
      this.route.navigate(['/modifycountry', id]);
    }

    deleteCountry(id: number){
      this.service.deleteCountryByIdFromBackEnd(id).subscribe(
        data =>{
          console.log("Country Deleted Successfully!");
        },
        error => console.log('error')
      )
      window.alert("Country Deleted Successfully!");
      window.location.reload();
    }
}
