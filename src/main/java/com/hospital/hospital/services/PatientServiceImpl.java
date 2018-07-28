package com.hospital.hospital.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.hospital.daos.PatientRepository;
import com.hospital.hospital.models.Patient;

@Service
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	PatientRepository patientRepo;

	@Override
	public Optional<Patient> getPatient(String id) {
		return patientRepo.findById(id);
	}

	@Override
	public List<Patient> getPatientList() {
		return patientRepo.findAll();
	}

	@Override
	public Patient savePatient(Patient patient) {
		return patientRepo.save(patient);
	}

}
