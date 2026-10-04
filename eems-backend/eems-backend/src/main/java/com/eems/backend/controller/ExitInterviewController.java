package com.eems.backend.controller;

import com.eems.backend.entity.ExitInterview;
import com.eems.backend.repository.ExitInterviewRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exit-interviews")
public class ExitInterviewController {

    private final ExitInterviewRepository exitInterviewRepository;

    public ExitInterviewController(ExitInterviewRepository exitInterviewRepository) {
        this.exitInterviewRepository = exitInterviewRepository;
    }

    @GetMapping
    public List<ExitInterview> getAllExitInterviews() {
        return exitInterviewRepository.findAll();
    }

    @PostMapping
    public ExitInterview addExitInterview(@RequestBody ExitInterview exitInterview) {
        return exitInterviewRepository.save(exitInterview);
    }
}
