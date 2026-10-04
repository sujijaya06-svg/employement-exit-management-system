package com.eems.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "exit_request")
public class ExitRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer request_id;

    private Integer employee_id;

    private Integer approved_by;

    private String status;

    public Integer getRequest_id() {
        return request_id;
    }

    public void setRequest_id(Integer request_id) {
        this.request_id = request_id;
    }

    public Integer getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(Integer employee_id) {
        this.employee_id = employee_id;
    }

    public Integer getApproved_by() {
        return approved_by;
    }

    public void setApproved_by(Integer approved_by) {
        this.approved_by = approved_by;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
