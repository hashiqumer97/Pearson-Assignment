package com.countrylist.CRUD.controller;

import java.util.ArrayList;
import java.util.List;
import com.countrylist.CRUD.model.Country;
import com.countrylist.CRUD.services.CrudService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CrudRestController {
	
	@Autowired
	private CrudService service;

	@GetMapping("/rest/v2/getcountrylist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Country> fetchCountryList(){
		List<Country> countries = new ArrayList<Country>();
		countries = service.fetchCountryList();
		return countries;
	}
	
	@PostMapping("/rest/v2/addcountry")
	@CrossOrigin(origins = "http://localhost:4200")
	public Country addCountry (@RequestBody Country country) {
		return service.saveCountry(country);
	}
	
	@GetMapping("/rest/v2/getcountrybyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Country fetchCountryById(@PathVariable int id){
		return service.fetchCountryById(id).get();
	}
	
	@DeleteMapping("/rest/v2/deletecountrybyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public String deleteCountryById (@PathVariable int id) {
		return service.deleteCountryById(id);
	}
	
	@PutMapping("/rest/v2/modifycountry")
	@CrossOrigin(origins = "http://localhost:4200")
	public Country modifyCountry (@RequestBody Country country) {
		return service.saveCountry(country);
	}
}
