package com.hospital.hospital.models;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="doctor")
@Getter
@Setter
public class Doctor {

	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy="uuid")
	@Column(name="doctor_id")
	private String doctorId;
	
	@Column(name="doctor_name")
	private String doctorName;
	
	@Column(name="doctor_surname")
	private String doctorSurname;
	
	@Column(name="doctor_branch")
	private String doctorBranch;
}
