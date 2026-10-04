package com.eems.backend.controller;

import com.eems.backend.entity.ExitRequest;
import com.eems.backend.repository.ExitRequestRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exit-requests")
@CrossOrigin(origins = "http://localhost:5173")
public class ExitRequestController {

    private final ExitRequestRepository exitRequestRepository;

    public ExitRequestController(ExitRequestRepository exitRequestRepository) {
        this.exitRequestRepository = exitRequestRepository;
    }

    // Get all exit requests
    @GetMapping
    public List<ExitRequest> getAllExitRequests() {
        return exitRequestRepository.findAll();
    }

    // Create a new exit request
    @PostMapping
    public ExitRequest addExitRequest(@RequestBody ExitRequest exitRequest) {
        return exitRequestRepository.save(exitRequest);
    }

    // Manager approves an exit request
    @PutMapping("/{requestId}/approve")
    public ExitRequest approveExitRequest(
            @PathVariable Integer requestId,
            @RequestParam Integer managerId) {

        ExitRequest request = exitRequestRepository
                .findById(requestId)
                .orElseThrow(() ->
                        new RuntimeException("Exit request not found"));

        request.setStatus("APPROVED");
        request.setApproved_by(managerId);

        return exitRequestRepository.save(request);
    }

    // Manager rejects an exit request
    @PutMapping("/{requestId}/reject")
    public ExitRequest rejectExitRequest(
            @PathVariable Integer requestId,
            @RequestParam Integer managerId) {

        ExitRequest request = exitRequestRepository
                .findById(requestId)
                .orElseThrow(() ->
                        new RuntimeException("Exit request not found"));

        request.setStatus("REJECTED");
        request.setApproved_by(managerId);

        return exitRequestRepository.save(request);
    }
}