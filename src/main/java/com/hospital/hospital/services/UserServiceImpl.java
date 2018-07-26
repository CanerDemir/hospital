package com.hospital.hospital.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.hospital.daos.UserRepository;
import com.hospital.hospital.models.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public User login(User user) {
		return userRepository.login(user.getEmail());
	}

}
