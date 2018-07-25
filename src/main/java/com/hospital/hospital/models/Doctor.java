package com.hospital.hospital.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="doctor")
@Getter
@Setter
public class Doctor {

	@Id
	@Column(name="doctor_id")
	private String doctorId;
	
	@Column(name="doctor_name")
	private String doctorName;
	
	@Column(name="doctor_surname")
	private String doctorSurname;
	
	@Column(name="doctor_branch")
	private String doctorBranch;
}
