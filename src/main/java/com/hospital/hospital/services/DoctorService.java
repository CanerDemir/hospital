package com.hospital.hospital.services;

import java.util.List;

import com.hospital.hospital.models.Doctor;

public interface DoctorService {

	List<Doctor> getDoctors();

	Doctor saveDoctor(Doctor doctor);

}
