package com.cognixia.jump.service;
<<<<<<< HEAD
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
=======

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
>>>>>>> 4ae68f12ddab4a71678a86bcc51043cc7bb20cd0
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognixia.jump.model.User;
<<<<<<< HEAD
import com.cognixia.jump.repository.MyUserDetailsRepo;
=======
import com.cognixia.jump.repository.UserRepository;
>>>>>>> 4ae68f12ddab4a71678a86bcc51043cc7bb20cd0

@Service
public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired
<<<<<<< HEAD
	MyUserDetailsRepo repo;
=======
	UserRepository repo;
>>>>>>> 4ae68f12ddab4a71678a86bcc51043cc7bb20cd0

	
	// method will by called by Spring Security when a request comes in
	// credentials (username + password) passed through the request will be loaded in
	// username will be passed to this method (as an argument), then will call the UserRepository in order to find a user with that username
	// As long as this user is found, User info will be passed to a UserDetails object and returned
		
	
	@Override
<<<<<<< HEAD
	public MyUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Optional<User> userFound = repo.findByUsername(username);
=======
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Optional<User> userFound = Optional.ofNullable(repo.getUserByUsername(username));
>>>>>>> 4ae68f12ddab4a71678a86bcc51043cc7bb20cd0
		
		// if username doesn't exist in the table, throw an exception
		if(userFound.isEmpty()) {
			throw new UsernameNotFoundException(username);
		}
		
		// as long as we found the user, create a user details object with all the relevant info for security 
		// security will take this object and perform authorization & authentication
		return new MyUserDetails( userFound.get() );
	}

}