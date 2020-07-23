package com.info.Exception;

public class UserNameAlreadyExistResponse {
	private String Username;

	public UserNameAlreadyExistResponse() {
		
		// TODO Auto-generated constructor stub
	}

	public UserNameAlreadyExistResponse(String Username) {
		this.Username=Username;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		Username = username;
	}
	
}
