package com.eems.backend.controller;

import com.eems.backend.entity.Clearance;
import com.eems.backend.repository.ClearanceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clearances")
public class ClearanceController {

    private final ClearanceRepository clearanceRepository;

    public ClearanceController(ClearanceRepository clearanceRepository) {
        this.clearanceRepository = clearanceRepository;
    }

    @GetMapping
    public List<Clearance> getAllClearances() {
        return clearanceRepository.findAll();
    }

    @PostMapping
    public Clearance addClearance(@RequestBody Clearance clearance) {
        return clearanceRepository.save(clearance);
    }
}
