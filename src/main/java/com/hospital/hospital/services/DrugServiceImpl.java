package com.hospital.hospital.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.hospital.daos.DrugRepository;
import com.hospital.hospital.models.Drug;

@Service
public class DrugServiceImpl implements DrugService {
	
	@Autowired
	DrugRepository drugRepository;

	@Override
	public Optional<Drug> getDrug(String drugId) {
		return drugRepository.findById(drugId);
	}

	@Override
	public List<Drug> getDrugList() {
		return drugRepository.findAll();
	}

	@Override
	public Drug saveDrug(Drug drug) {
		return drugRepository.save(drug);
	}

}
