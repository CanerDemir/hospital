package com.hospital.hospital.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital.models.Doctor;
import com.hospital.hospital.services.DoctorService;

@RestController
@RequestMapping("doctor/")
public class DoctorController {

	@Autowired
	DoctorService doctorService;
	
	@GetMapping(value="getDoctors")
	public List<Doctor> getDoctors() {
		return doctorService.getDoctors();
	}
	
	@PostMapping(value="saveDoctor")
	public Doctor saveDoctor(@RequestBody Doctor doctor) {
		return doctorService.saveDoctor(doctor);
	}
}
