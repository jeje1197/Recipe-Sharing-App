package com.cognixia.jump.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.exception.ResourceNotFoundException;
import com.cognixia.jump.model.User;
import com.cognixia.jump.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

	//Previous code (sans service)
	/*@Autowired
	UserRepository repo;*/
	@Autowired
	UserService service;
	
	@Autowired
	PasswordEncoder encoder;
	
	@GetMapping("/user")
	public List<User> getUsers() {
		/*Previous code (sans service)
		return repo.findAll();*/

		//New code (w service)
		return service.getUsers();
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<?> getUser(@PathVariable int id) throws ResourceNotFoundException {

		/*Previous code (sans service)
		Optional<User> found = repo.findById(id);

		if(found.isEmpty()) {
			throw new ResourceNotFoundException("User with id = " + id + " was not found");
		}

		return ResponseEntity.status(200).body(found.get());*/

		/*New Code*/
		User found = service.getUserById(id);

		return ResponseEntity.status(200).body(found);
		

	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		
		user.setId(-1);
		
		user.setPassword(encoder.encode(user.getPassword()));
		/*Previous code (sans service)
		User created = repo.save(user);*/

		/*New code*/
		User created= service.createUser(user);

		return ResponseEntity.status(201).body(created);
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable int id) throws ResourceNotFoundException {
		
		/*Previous code (sans service)
		Optional<User> found = repo.findById(id);
		if( found.isEmpty() ) {
			
			throw new ResourceNotFoundException("User with id = " + id + " was not found");
		}
		repo.deleteById(id);
		return ResponseEntity.status(200).body(found.get());*/

		/*New code w service*/
		service.deleteUser(id);
		return ResponseEntity.status(200).body("Deleted Student with id: "+id);
	}
}
