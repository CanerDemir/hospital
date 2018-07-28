package com.hospital.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.hospital.models.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, String> {

}
