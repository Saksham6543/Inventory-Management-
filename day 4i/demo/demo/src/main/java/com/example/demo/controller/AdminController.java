
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Admin;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/api/login")
public class AdminController {

    @Autowired
    private AdminService loginService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Admin login) {
        try {
            loginService.save(login);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred during registration: " + e.getMessage());
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestBody Admin login) {
        boolean isAuthenticated = loginService.authenticate(login.getEmail(), login.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok("Authentication successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity<Admin> getUser(@PathVariable String email) {
        return loginService.findByEmail(email)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(404).body(null));
    }
}
