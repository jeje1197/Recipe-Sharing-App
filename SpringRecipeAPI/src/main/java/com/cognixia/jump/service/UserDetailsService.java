package com.cognixia.jump.service;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserDetailsService {

    MyUserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
