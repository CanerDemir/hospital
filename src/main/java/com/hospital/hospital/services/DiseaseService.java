package com.hospital.hospital.services;

import java.util.List;
import java.util.Optional;

import com.hospital.hospital.models.Disease;

public interface DiseaseService {

	Optional<Disease> getDisease(String diseaseId);

	List<Disease> getDiseaseList();

	Disease saveDisease(Disease disease);

}
