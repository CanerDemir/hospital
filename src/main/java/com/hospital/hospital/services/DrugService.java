package com.hospital.hospital.services;

import java.util.List;
import java.util.Optional;

import com.hospital.hospital.models.Drug;

public interface DrugService {

	Optional<Drug> getDrug(String drugId);

	List<Drug> getDrugList();

	Drug saveDrug(Drug drug);

}
