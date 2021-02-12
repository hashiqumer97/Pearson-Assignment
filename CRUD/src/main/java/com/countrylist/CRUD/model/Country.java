package com.countrylist.CRUD.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Country {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String countryname;
	@Column(nullable = false)
	private String countrycode;
	@Column(nullable = false)
	private String countrycapitalcity;
	
	
	public Country() {
	}
	
	
	public Country(int id, String countryname, String countrycode, String countrycapitalcity) {
		super();
		this.id = id;
		this.countryname = countryname;
		this.countrycode = countrycode;
		this.countrycapitalcity = countrycapitalcity;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCountryname() {
		return countryname;
	}
	public void setCountryname(String countryname) {
		this.countryname = countryname;
	}
	public String getCountrycode() {
		return countrycode;
	}
	public void setCountrycode(String countrycode) {
		this.countrycode = countrycode;
	}
	public String getCountrycapitalcity() {
		return countrycapitalcity;
	}
	public void setCountrycapitalcity(String countrycapitalcity) {
		this.countrycapitalcity = countrycapitalcity;
	}
	
	
}
