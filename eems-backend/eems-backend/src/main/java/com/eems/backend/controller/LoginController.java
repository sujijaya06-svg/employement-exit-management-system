package com.eems.backend.controller;

import com.eems.backend.entity.User;
import com.eems.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    private final UserRepository userRepository;

    public LoginController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User loginUser) {

        Map<String, Object> response = new HashMap<>();

        Optional<User> user = userRepository.findByUsername(
                loginUser.getUsername()
        );

        if (user.isPresent() &&
            user.get().getPassword().equals(loginUser.getPassword())) {

            response.put("message", "Login successful");
            response.put("username", user.get().getUsername());
            response.put("role", user.get().getRole());

            return response;
        }

        response.put("message", "Invalid username or password");

        return response;
    }

    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signup(
            @RequestBody User newUser) {

        Map<String, Object> response = new HashMap<>();

        if (userRepository.findByUsername(newUser.getUsername()).isPresent()) {

            response.put("message", "Username already exists");

            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(response);
        }

        User savedUser = userRepository.save(newUser);

        response.put("message", "Signup successful");
        response.put("username", savedUser.getUsername());
        response.put("role", savedUser.getRole());

        return ResponseEntity.ok(response);
    }
}