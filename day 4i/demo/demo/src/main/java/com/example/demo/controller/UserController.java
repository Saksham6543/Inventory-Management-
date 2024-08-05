package com.example.demo.controller;

import com.example.demo.model.Admin;
import com.example.demo.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class UserController {

    private final AdminService loginService;

    public UserController(AdminService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticateUser(@RequestParam String email, @RequestParam String password) {
        boolean isAuthenticated = loginService.authenticate(email, password);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Admin> registerUser(@RequestBody Admin login) {
        Admin savedLogin = loginService.save(login);
        return ResponseEntity.ok(savedLogin);
    }

    @PutMapping("/update-password")
    public ResponseEntity<String> updatePassword(@RequestParam String email, 
                                                 @RequestParam String newPassword, 
                                                 @RequestParam String confirmPassword) {
        boolean isUpdated = loginService.updatePassword(email, newPassword, confirmPassword);
        if (isUpdated) {
            return ResponseEntity.ok("Password updated successfully");
        } else {
            return ResponseEntity.status(400).body("Password update failed. Please ensure the passwords match and the email is correct.");
        }
    }
}
