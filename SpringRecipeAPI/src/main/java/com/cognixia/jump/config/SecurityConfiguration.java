package com.cognixia.jump.config;

import com.cognixia.jump.filter.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
public class SecurityConfiguration {
	@Autowired
	UserDetailsService userDetailsService;
	
	@Autowired
	JwtRequestFilter filter;
	
	@Bean
	protected UserDetailsService userDetailsService() {
		return userDetailsService;
	}
	
	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.authorizeRequests()
			.antMatchers(HttpMethod.POST, "/api/user").permitAll() // anyone can create a user
			.antMatchers("/api/user").permitAll()
			.antMatchers("/authenticate").permitAll()

			.antMatchers("/api-docs/").permitAll()
			.antMatchers("/swagger-ui.html").permitAll()
			.antMatchers("/swagger-ui/**").permitAll()
			.antMatchers("/configuration/security").permitAll()
			.antMatchers("/swagger-resources").permitAll()
			.antMatchers("/webjars/**").permitAll()
			.antMatchers("/v3/**").permitAll()
			.anyRequest().authenticated() // if not specified, all other end points need a user login
			//.anyRequest().authenticated() // if not specified, all other end points need a user login

			.and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.addFilterBefore(filter,  UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}
	
	@Bean
	protected PasswordEncoder encoder() {
//		return NoOpPasswordEncoder.getInstance();
		return new BCryptPasswordEncoder();
	}
	
	// load the encoder & user details service that are needed for spring security to do authentication
	@Bean
	protected DaoAuthenticationProvider authenticationProvider() {
		
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		
		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder( encoder() );
		
		return authProvider;
	}
	
	@Bean
	protected AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
		return authConfig.getAuthenticationManager();
	}
	
}
