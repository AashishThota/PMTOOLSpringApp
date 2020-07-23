package com.info.controller;
import static com.info.security.SecurityConstants.TOKEN_PREFIX;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.info.Service.MapValidationService;
import com.info.Service.UserService;
import com.info.model.User;
import com.info.payload.JWTLoginSuccessResponse;
import com.info.payload.LoginRequest;
import com.info.security.JWTTokenProvider;
import com.info.validator.UserValidator;

@RestController
@RequestMapping("/api/User")
public class UserController {
	@Autowired
	private MapValidationService mapValidationService;
	@Autowired
	private UserValidator userValidator;
	@Autowired
	private UserService userService;
	@Autowired
	private JWTTokenProvider jwtTokenProvider;
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest,BindingResult result){
		ResponseEntity<?> errorMap=mapValidationService.MapValidationService(result);
		if(errorMap!=null) return errorMap;
		Authentication authenticate=authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authenticate);
		String jwt= TOKEN_PREFIX+jwtTokenProvider.generateToken(authenticate);
		return ResponseEntity.ok(new JWTLoginSuccessResponse(true, jwt));
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody User newUser, BindingResult result){
		userValidator.validate(newUser, result);
		ResponseEntity<?> errorMap=mapValidationService.MapValidationService(result);
		if(errorMap!=null) return errorMap;
		User user=userService.saveUser(newUser);
		return new ResponseEntity<User>(user,HttpStatus.CREATED);
	} 
}
