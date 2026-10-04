package com.eems.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "clearance")
public class Clearance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer clearance_id;

    private Integer request_id;

    private String dept_status;

    public Integer getClearance_id() {
        return clearance_id;
    }

    public void setClearance_id(Integer clearance_id) {
        this.clearance_id = clearance_id;
    }

    public Integer getRequest_id() {
        return request_id;
    }

    public void setRequest_id(Integer request_id) {
        this.request_id = request_id;
    }

    public String getDept_status() {
        return dept_status;
    }

    public void setDept_status(String dept_status) {
        this.dept_status = dept_status;
    }
}
