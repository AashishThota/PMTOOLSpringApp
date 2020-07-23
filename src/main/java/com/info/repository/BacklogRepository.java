package com.info.repository;

import org.springframework.data.repository.CrudRepository;

import com.info.model.Backlog;

public interface BacklogRepository extends CrudRepository<Backlog, Long>{

	Backlog findByProjectIdentifier(String projectIdentifier);
		
	
}
