package com.info.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.info.Exception.UserNameAlreadyExistException;
import com.info.model.User;
import com.info.repository.UserRepository;
import com.info.validator.UserValidator;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public User saveUser(User newUser) {
		try{
			newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
			newUser.setUsername(newUser.getUsername());
			newUser.setConfirmPassword("");
			return userRepository.save(newUser);		
		}
		catch(Exception ex) {
			throw new UserNameAlreadyExistException("Username : "+newUser.getUsername()+" already exist");
		}
		
	}
	
}
