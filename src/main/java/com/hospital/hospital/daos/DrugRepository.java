package com.hospital.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.hospital.models.Drug;

@Repository
public interface DrugRepository extends JpaRepository<Drug, String> {

}
