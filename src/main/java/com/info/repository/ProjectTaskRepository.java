package com.info.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.info.model.ProjectTask;


public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

	List<ProjectTask> findByProjectIdentifierOrderByPriority(String id);
	
	ProjectTask findByProjectSequence(String sequence);
}
