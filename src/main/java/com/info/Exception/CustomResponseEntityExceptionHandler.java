package com.info.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler{

	@ExceptionHandler
	public ResponseEntity<Object> handleProjectIdException(ProjectIdException ex,WebRequest req){
		
		ProjectIdExceptionResponse errorResponse=new ProjectIdExceptionResponse(ex.getMessage());
		
		return new ResponseEntity<Object>(errorResponse,HttpStatus.BAD_REQUEST);
		
	}
	
	@ExceptionHandler
	public ResponseEntity<Object> handleProjectNotFoundException(ProjectNotfoundException ex,WebRequest req){
		
		ProjectNotFoundExceptionResponse errorResponse=new ProjectNotFoundExceptionResponse(ex.getMessage());
		
		return new ResponseEntity<Object>(errorResponse,HttpStatus.BAD_REQUEST);
		
	}
	
	@ExceptionHandler
	public ResponseEntity<Object> handleUserNameAlreadyExistException(UserNameAlreadyExistException ex,WebRequest req){
		
		UserNameAlreadyExistResponse errorResponse=new UserNameAlreadyExistResponse(ex.getMessage());
		
		return new ResponseEntity<Object>(errorResponse,HttpStatus.BAD_REQUEST);
		
	}
}
