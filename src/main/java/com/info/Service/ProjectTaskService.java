package com.info.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.info.Exception.ProjectIdException;
import com.info.Exception.ProjectNotfoundException;
import com.info.model.Backlog;
import com.info.model.Project;
import com.info.model.ProjectTask;
import com.info.repository.BacklogRepository;
import com.info.repository.ProjectRepository;
import com.info.repository.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private BacklogRepository backlogRepository;
	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	@Autowired
	private ProjectRepository projectRepository;
	@Autowired
	private ProjectService projectService;
	
	public ProjectTask addProjectTask(String projectIdentifier,ProjectTask projectTask,String name) {
		
		try {
		//get backlog related to projectIdentifier
		Backlog backlog=projectService.findByProjectIdentifier(projectIdentifier, name).getBacklog();
		
		//set backlog to projectIdentifier
		projectTask.setBacklog(backlog);
		//get backlog project sequence
		Integer backlogProjectSequence=backlog.getPTSequence();
		//update backlog sequence
		backlogProjectSequence++;
		backlog.setPTSequence(backlogProjectSequence);
		//set project identifier in project task
		projectTask.setProjectIdentifier(projectIdentifier);
		//set project sequence in project task
		projectTask.setProjectSequence(projectIdentifier+"-"+backlogProjectSequence);
		//set priority
		if(projectTask.getPriority()==null||projectTask.getPriority()==0) {
			projectTask.setPriority(3);
		}
		//set Status
		if(projectTask.getStatus()==""||projectTask.getStatus()==null) {
			projectTask.setStatus("TO_DO");
		}
		return projectTaskRepository.save(projectTask);
		}
		catch(Exception e) {
			throw new ProjectNotfoundException("Project Not Found");
		}
		}

	public List<ProjectTask> findBacklogById(String backlog_id,String username) {
		
		projectService.findByProjectIdentifier(backlog_id, username);
		
		return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlog_id);
	}
	
	public ProjectTask findPTByProjectSequence(String backlog_id,String pt_id,String username) {
		
		//see if backlog exist 
		projectService.findByProjectIdentifier(backlog_id, username);
		//See if project Task Exsist
		ProjectTask projectTask=projectTaskRepository.findByProjectSequence(pt_id);
		if(projectTask==null) {
			throw new ProjectNotfoundException("Project Task with id:"+pt_id+" Not Found");
		}
		
		if(!projectTask.getProjectIdentifier().equals(backlog_id)) {
			throw new ProjectNotfoundException("Project Task with id:"+backlog_id+" does not exist in "+backlog_id);
		}
			
		return projectTask;
	}
	
	public ProjectTask updateByProjectSequence(ProjectTask updatedProjectTask, String backlog_id, String pt_id, String username) {
		ProjectTask projectTask=findPTByProjectSequence(backlog_id, pt_id,username);
		projectTask=updatedProjectTask;
		
		return projectTaskRepository.save(projectTask);
		
	}
	
	public void deletePTByProjectSequence(String backlog_id, String pt_id,String username) {
		ProjectTask projectTask=findPTByProjectSequence(backlog_id, pt_id,username);
//		Backlog backlog=projectTask.getBacklog();
//		List<ProjectTask> pts=backlog.getProjectTask();
//		pts.remove(projectTask);
//		backlogRepository.save(backlog);
		projectTaskRepository.delete(projectTask);
	}
}
