package com.cognixia.jump.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique = true, nullable = false)
	@NotBlank
	private String username;

	@Column(nullable = false)
	@NotBlank
	private String password;
	
	@Column(nullable = false)
	private String email;
	
	public User() {
		
	}
}
