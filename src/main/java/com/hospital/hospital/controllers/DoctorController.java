package com.hospital.hospital.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.hospital.models.Doctor;
import com.hospital.hospital.services.DoctorService;

@CrossOrigin
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
