package com.eems.backend.controller;

import com.eems.backend.entity.Manager;
import com.eems.backend.repository.ManagerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/managers")
public class ManagerController {

    private final ManagerRepository managerRepository;

    public ManagerController(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }

    @GetMapping
    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }

    @PostMapping
    public Manager addManager(@RequestBody Manager manager) {
        return managerRepository.save(manager);
    }
}
