package com.cognixia.jump.repository;

import com.cognixia.jump.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MyUserDetailsRepo extends JpaRepository<User, Integer>{

	Optional<User> findByUsername(String username);

}
