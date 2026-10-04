
package com.eems.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "exit_interview")
public class ExitInterview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer interview_id;

    private Integer request_id;

    private String feedback;

    public Integer getInterview_id() {
        return interview_id;
    }

    public void setInterview_id(Integer interview_id) {
        this.interview_id = interview_id;
    }

    public Integer getRequest_id() {
        return request_id;
    }

    public void setRequest_id(Integer request_id) {
        this.request_id = request_id;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}