package com.hospital.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.hospital.models.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, String> {

}
