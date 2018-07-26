package com.hospital.hospital.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hospital.hospital.models.User;

public interface UserRepository extends JpaRepository<User, String> {

	@Query(value="SELECT u FROM User u WHERE email = ?1")
	User login(String email);

}
