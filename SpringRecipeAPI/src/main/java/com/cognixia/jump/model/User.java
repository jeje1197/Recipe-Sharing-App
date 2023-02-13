package com.cognixia.jump.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Entity
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	public static enum Role {
		ROLE_USER, ROLE_ADMIN	// roles should start with capital ROLE_ and has to be completely in capital letters
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique = true, nullable = false)
	@NotBlank
	private String username;

	@Column(nullable = false)
	@NotBlank
	private String password;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Role role;
	
	@Column
	private String profilePhoto;



	@Column(columnDefinition = "boolean default true" )
	private boolean enabled;

	public User(Integer id,String username, String password, String profilePhoto){
		this.id=id;
		this.username=username;
		this.password=password;
		this.profilePhoto=profilePhoto;

	}
	public User() {
		
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getProfilePhoto() {
		return profilePhoto;
	}

	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	@Override
	public String toString() {
		return "User{" +
				"id=" + id +
				", username='" + username + '\'' +
				", password='" + password + '\'' +
				", role=" + role +
				", profilePhoto='" + profilePhoto + '\'' +
				", enabled=" + enabled +
				'}';
	}
}
