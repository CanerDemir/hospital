package com.hospital.hospital.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.hospital.daos.DoctorRepository;
import com.hospital.hospital.models.Doctor;

@Service
public class DoctorServiceImpl implements DoctorService {
	
	@Autowired
	DoctorRepository doctorRepository;

	@Override
	public List<Doctor> getDoctors() {
		return doctorRepository.findAll();
	}

	@Override
	public Doctor saveDoctor(Doctor doctor) {
		return doctorRepository.save(doctor);
	}

}
