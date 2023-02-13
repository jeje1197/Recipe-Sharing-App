package com.cognixia.jump.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.cognixia.jump.model.User;

@Repository
public interface MyUserDetailsRepo extends JpaRepository<UserDetails, Integer>{

	Optional<User> findByUsername(String username);

}