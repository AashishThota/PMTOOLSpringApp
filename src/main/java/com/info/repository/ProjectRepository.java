package com.info.repository;

import com.info.model.Project;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long>{

	Project findByProjectIdentifier(String projectId);
	
	
	
	@Override
	Iterable<Project> findAll();
	
	Iterable<Project> findAllByProjectLeader(String name);
}
