package com.hospital.hospital.services;

import java.util.List;
import java.util.Optional;

import com.hospital.hospital.models.Patient;

public interface PatientService {

	Optional<Patient> getPatient(String id);

	List<Patient> getPatientList();

	Patient savePatient(Patient patient);

}
