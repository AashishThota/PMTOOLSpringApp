package com.info.controller;

import java.security.Principal;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.info.Service.MapValidationService;
import com.info.Service.ProjectService;
import com.info.model.Project;

@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	@Autowired
	private MapValidationService mapValidationService;
	
	@PostMapping("")
	public ResponseEntity<?> saveProject(@Valid @RequestBody Project project, BindingResult result,Principal principal){
		
		ResponseEntity<?> errorMap=mapValidationService.MapValidationService(result);
		if(errorMap!=null) return errorMap;
		
		Project project1=projectService.saveOrUpdate(project,principal.getName());
		return new ResponseEntity<Project>(project, HttpStatus.CREATED);
	}

	@GetMapping("/{projectId}")
	public ResponseEntity<?> findProjectById(@PathVariable String projectId,Principal principal){
		Project project1=projectService.findByProjectIdentifier(projectId,principal.getName());
		return new ResponseEntity<Project>(project1, HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> findAll(Principal principal){
		Iterable<Project> projects=projectService.findAll(principal.getName());
		return new ResponseEntity<Iterable<Project>>(projects,HttpStatus.OK);
	}
	
	@DeleteMapping("/{projectId}")
	public ResponseEntity<?> deleteProject(@PathVariable String projectId,Principal principal){
		projectService.deleteProject(projectId,principal.getName());
		return new ResponseEntity<String>("Project with '"+projectId+"' deleted successfully",HttpStatus.OK);
	}
}
