package com.hospital.hospital.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="disease")
public class Disease {

	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy="uuid")
	@Column(name="id")
	private String id;
	
	@Column(name="disease_name")
	private String diseaseName;
	
	@Column(name="disease_description")
	private String diseaseDescription;
	
	@Column(name="patient_id")
	private String patientId;
}
