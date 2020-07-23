package com.info.repository;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.info.Service.MapValidationService;
import com.info.Service.UserService;
import com.info.model.User;

@Repository

public interface UserRepository extends CrudRepository<User, Long> {

	User findByUsername(String username);
	User getById(Long id);
}
