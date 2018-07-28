package com.hospital.hospital.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital.models.Drug;
import com.hospital.hospital.services.DrugService;

@CrossOrigin
@RestController
@RequestMapping("drug/")
public class DrugController {
	
	@Autowired
	DrugService drugService;

	@GetMapping("getDrug/{drugId}")
	public Optional<Drug> getDrug(@PathVariable("drugId") String drugId) {
		return drugService.getDrug(drugId);
	}
	
	@GetMapping("getDrugList")
	public List<Drug> getDrugList(){
		return drugService.getDrugList();
	}
	
	@PostMapping("saveDrug")
	public Drug saveDrug(@RequestBody Drug drug) {
		return drugService.saveDrug(drug);
	}
}
