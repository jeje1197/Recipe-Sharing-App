package com.cognixia.jump.controller;

import com.cognixia.jump.exception.ResourceNotFoundException;
import com.cognixia.jump.model.User;
import com.cognixia.jump.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

	//Previous code (sans service)
	/*@Autowired
	UserRepository repo;*/
	@Autowired
	UserService service;
	
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
