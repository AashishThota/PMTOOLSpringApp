package com.info.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ProjectTask {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String projectSequence;
	@NotBlank(message = "Please include a Project Summary")
	private String summary;
	private String acceptableCriteria;
	private String status;
	@Column(updatable = false)
	private String projectIdentifier;
	private Integer priority;
	@JsonFormat(pattern = "yyyy-dd-mm")
	private Date dueDate;
	private Date created_At;
	private Date updated_At;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "backlog_id",updatable = false,nullable = false)
	@JsonIgnore
	private Backlog backlog;
	
	public ProjectTask() {}
	
	public ProjectTask(Long id, String projectSequence,
			@NotBlank(message = "Please include a Project Summary") String summary, String acceptableCriteria,
			String status, String projectIdentifier, Integer priority, Date dueDate, Date created_At, Date updated_At) {
		super();
		this.id = id;
		this.projectSequence = projectSequence;
		this.summary = summary;
		this.acceptableCriteria = acceptableCriteria;
		this.status = status;
		this.projectIdentifier = projectIdentifier;
		this.priority = priority;
		this.dueDate = dueDate;
		this.created_At = created_At;
		this.updated_At = updated_At;
	}

	@PrePersist
	protected void prePersist() {
		this.created_At=new Date();
	}
	
	@PreUpdate
	protected void preUpdate() {
		this.updated_At=new Date();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProjectSequence() {
		return projectSequence;
	}

	public void setProjectSequence(String projectSequence) {
		this.projectSequence = projectSequence;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getAcceptableCriteria() {
		return acceptableCriteria;
	}

	public void setAcceptableCriteria(String acceptableCriteria) {
		this.acceptableCriteria = acceptableCriteria;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getProjectIdentifier() {
		return projectIdentifier;
	}

	public void setProjectIdentifier(String projectIdentifier) {
		this.projectIdentifier = projectIdentifier;
	}

	public Integer getPriority() {
		return priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	public Date getDueDate() {
		return dueDate;
	}
	
	

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Date getCreated_At() {
		return created_At;
	}

	public void setCreated_At(Date created_At) {
		this.created_At = created_At;
	}

	public Date getUpdated_At() {
		return updated_At;
	}

	public void setUpdated_At(Date updated_At) {
		this.updated_At = updated_At;
	}

	
	
	public Backlog getBacklog() {
		return backlog;
	}

	public void setBacklog(Backlog backlog) {
		this.backlog = backlog;
	}

	@Override
	public String toString() {
		return "ProjectTask [id=" + id + ", projectSequence=" + projectSequence + ", summary=" + summary
				+ ", acceptableCriteria=" + acceptableCriteria + ", status=" + status + ", projectIdentifier="
				+ projectIdentifier + ", priority=" + priority + ", dueDate=" + dueDate + ", created_At=" + created_At
				+ ", updated_At=" + updated_At + "]";
	}
	
	

}
