package com.info.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.info.model.User;
import com.info.repository.UserRepository;

@Service
public class CustomUserDetailService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user=userRepository.findByUsername(username);
		if(user==null)  new UsernameNotFoundException("User does not exist");
		return user;
	}

	public User loadUserById(Long id) {
		User user=userRepository.getById(id);
		if(user==null)  new UsernameNotFoundException("User does not exist");
		return user;
	}
}
