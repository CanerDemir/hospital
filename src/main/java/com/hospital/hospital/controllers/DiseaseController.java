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

import com.hospital.hospital.models.Disease;
import com.hospital.hospital.services.DiseaseService;

@CrossOrigin
@RestController
@RequestMapping("disease/")
public class DiseaseController {
	
	@Autowired
	DiseaseService diseaseService;

	@GetMapping("getDisease/{diseaseId}")
	public Optional<Disease> getDisease(@PathVariable("diseaseId") String diseaseId) {
		return diseaseService.getDisease(diseaseId);
	}
	
	@GetMapping("getDiseaseList")
	public List<Disease> getDiseaseList(){
		return diseaseService.getDiseaseList();
	}
	
	@PostMapping("saveDisease")
	public Disease saveDisease(@RequestBody Disease disease) {
		return diseaseService.saveDisease(disease);
	}
}
