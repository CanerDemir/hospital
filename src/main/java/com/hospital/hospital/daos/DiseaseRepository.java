package com.hospital.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.hospital.models.Disease;

@Repository
public interface DiseaseRepository extends JpaRepository<Disease, String> {

}
