package com.hospital.hospital.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.hospital.daos.DiseaseRepository;
import com.hospital.hospital.models.Disease;

@Service
public class DiseaseServiceImpl implements DiseaseService {
	
	@Autowired
	DiseaseRepository diseaseRepo;

	@Override
	public Optional<Disease> getDisease(String diseaseId) {
		return diseaseRepo.findById(diseaseId);
	}

	@Override
	public List<Disease> getDiseaseList() {
		return diseaseRepo.findAll();
	}

	@Override
	public Disease saveDisease(Disease disease) {
		return diseaseRepo.save(disease);
	}

}
