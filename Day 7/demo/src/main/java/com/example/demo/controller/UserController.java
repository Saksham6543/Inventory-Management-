package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/login/user")
public class UserController {

    @Autowired
    private UserService loginService;

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticateUser(@RequestBody UserDTO loginRequest) {
        boolean isAuthenticated = loginService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        if(loginRequest.getEmail().equals("admin@example.com")  && loginRequest.getPassword().equals("admin123"))
            return ResponseEntity.ok("Admin Login successful");
        else if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserDTO loginRequest) {
        User user = new User();
        user.setEmail(loginRequest.getEmail());
        user.setPassword(loginRequest.getPassword());
        User savedLogin = loginService.save(user);
        return ResponseEntity.ok(savedLogin);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> user = loginService.findByEmail(email);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = loginService.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = loginService.findAll();
        return ResponseEntity.ok(users);
    }
}
