package com.cognixia.jump.config;

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

import com.cognixia.jump.filter.JwtRequestFilter;

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
			.antMatchers("/api/hello").hasRole("USER")
			.antMatchers("/api/admin").hasRole("ADMIN")
			.antMatchers(HttpMethod.GET, "/api/user").hasRole("ADMIN")
			.antMatchers("/api/all").permitAll()
			.antMatchers(HttpMethod.POST, "/api/user").permitAll() // anyone can create a user
			.antMatchers("/authenticate").permitAll()
			.anyRequest().authenticated() // if not specified, all other end points need a user login
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
	
//	//Authorization - Who are you?
//	@Bean
//	protected UserDetailsService userDetailsService() {
//		UserDetails user = User.withDefaultPasswordEncoder()
//				.username("user1")
//				.password("pw123")
//				.roles("USER")
//				.build();
//		UserDetails admin = User.withDefaultPasswordEncoder()
//				.username("admin1")
//				.password("pw123")
//				.roles("ADMIN", "USER", "DEV") //multiple roles
//				.build();
//		UserDetails dev = User.withDefaultPasswordEncoder()
//				.username("dev1")
//				.password("pw123")
//				.roles("DEV")
//				.build();		
//		
//		return new InMemoryUserDetailsManager(user, admin, dev);
//	}
//	
//	@Bean
//	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//		//more specific endpoint matches towards the top and the broader matches towards the bottom
//		http.csrf().disable()
//			.authorizeRequests()
//			.antMatchers("/api/admin").hasRole("ADMIN")
//			.antMatchers("/api/user").hasRole("USER")
//			.antMatchers("/api/book").hasAnyRole("ADMIN", "DEV")
//			.antMatchers("/api/all").permitAll()
//			.antMatchers(HttpMethod.PUT, "/api/employee/department").hasRole("ADMIN")
//			.antMatchers("/api/employee/**").hasRole("USER")
//			.antMatchers("/**").hasRole("ADMIN")
////			.anyRequest().authenticated()
//			.and().httpBasic();
//
//		return http.build();
//	}
}
