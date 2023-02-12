package com.cognixia.jump.model;

<<<<<<< HEAD
=======
import java.io.Serializable;

>>>>>>> f17c92e6a08a77cc63bd5c782a53441223a00138
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD

@Entity
public class User
{
=======
import javax.validation.constraints.NotBlank;

@Entity
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	
>>>>>>> f17c92e6a08a77cc63bd5c782a53441223a00138
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
<<<<<<< HEAD
	@Column(nullable = false, unique = true)
	private String username;
	
	@Column(nullable = false)
	private String password;
	
=======
	@Column(unique = true, nullable = false)
	@NotBlank
	private String username;

	@Column(nullable = false)
	@NotBlank
	private String password;
	
	@Column
	private String profilePhoto;
	
	public User() {
		
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
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", profilePhoto=" + profilePhoto + "]";
	}
>>>>>>> f17c92e6a08a77cc63bd5c782a53441223a00138
	
}
