package com.hospital.hospital.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital.models.User;
import com.hospital.hospital.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("user/")
public class UserController {
	
	@Autowired
	UserService userService;

	@PostMapping(value="login")
	public User login(@RequestBody User user) {
		return userService.login(user);
	}
}
