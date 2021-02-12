import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { EditcountryComponent } from './editcountry/editcountry.component';


const routes: Routes = [
  {path: '', component: CountrylistComponent},
  {path: 'addcountry', component: AddcountryComponent},
  {path: 'modifycountry/:id', component: EditcountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
