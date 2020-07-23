package com.info.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.info.Exception.ProjectIdException;
import com.info.Exception.ProjectNotfoundException;
import com.info.model.Backlog;
import com.info.model.Project;
import com.info.model.User;
import com.info.repository.BacklogRepository;
import com.info.repository.ProjectRepository;
import com.info.repository.UserRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;
	@Autowired
	private BacklogRepository backlogRepository;
	@Autowired
	private UserRepository userRepository;
	
	public Project saveOrUpdate(Project p,String name) {
		if(p.getId() != null){
            Project existingProject = projectRepository.findByProjectIdentifier(p.getProjectIdentifier());
            if(existingProject !=null &&(!existingProject.getProjectLeader().equals(name))){
                throw new ProjectNotfoundException("Project not found in your account");
            }else if(existingProject == null){
                throw new ProjectNotfoundException("Project with ID: '"+p.getProjectIdentifier()+"' cannot be updated because it doesn't exist");
            }
        }
		
		try {
			User user=userRepository.findByUsername(name);
			p.setUser(user);
			p.setProjectLeader(user.getUsername());
			
			p.setProjectIdentifier(p.getProjectIdentifier().toUpperCase());
			if(p.getId()==null) {
				Backlog backlog= new Backlog();
				p.setBacklog(backlog);
				backlog.setProject(p);
				backlog.setProjectIdentifier(p.getProjectIdentifier().toUpperCase());
				
			if(p.getId()!=null) {
				p.setBacklog(backlogRepository.findByProjectIdentifier(p.getProjectIdentifier().toUpperCase()));
			}
			
			}
		return projectRepository.save(p);
		}
		catch(Exception e) {
			throw new ProjectIdException("Project Id '"+p.getProjectIdentifier()+"' already exsist");
		}
		}
	
	public Project findByProjectIdentifier(String projectId, String username) {
		
		Project project=projectRepository.findByProjectIdentifier(projectId.toUpperCase());
		if(project==null)
			throw new ProjectIdException("Project Id '"+projectId.toUpperCase()+"' does not exsist");
		if(!project.getProjectLeader().equals(username))
			throw new ProjectIdException("Project does not exist in your account");
		
		return project;
	}
	
	public Iterable<Project> findAll(String name){
		return projectRepository.findAllByProjectLeader(name);
	}
	
	public void deleteProject(String projectId,String username) {
		
		projectRepository.delete(findByProjectIdentifier(projectId, username));
	}
}
