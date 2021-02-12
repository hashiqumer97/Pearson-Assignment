package com.countrylist.CRUD.repo;

import java.lang.Integer;
import org.springframework.data.jpa.repository.JpaRepository;

import com.countrylist.CRUD.model.Country;

public interface ICrudRepo extends JpaRepository<Country, Integer> {

}
