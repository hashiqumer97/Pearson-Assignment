package com.countrylist.CRUD.services;

import java.util.List;
import java.util.Optional;

import com.countrylist.CRUD.model.Country;
import com.countrylist.CRUD.repo.ICrudRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudService {

	@Autowired
	private ICrudRepo repo;
	public List<Country> fetchCountryList(){
		return repo.findAll();
	}
	
	public Country saveCountry(Country country) {
		return repo.save(country);
	}
	
	public Optional<Country> fetchCountryById(int id) {
		return repo.findById(id);
	}
	
	public String deleteCountryById(int id) {
		String result;
		try {
			repo.deleteById(id);
			result = "Country had been successfully deleted!";
		}
		catch (Exception e){
			result = "Country had not been successfully deleted!";
		}
		return result;
	}
}
