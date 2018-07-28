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

import com.hospital.hospital.models.Patient;
import com.hospital.hospital.services.PatientService;

@CrossOrigin
@RestController
@RequestMapping("patient/")
public class PatientController {
	
	@Autowired
	PatientService patientService;

	@GetMapping(value="getPatient/{id}")
	public Optional<Patient> getPatient(@PathVariable("id") String id) {
		return patientService.getPatient(id);
	}
	
	@GetMapping("getPatientList")
	public List<Patient> getPatientList(){
		return patientService.getPatientList();
	}
	
	@PostMapping("savePatient")
	public Patient savePatient(@RequestBody Patient patient) {
		return patientService.savePatient(patient);
	}
}
