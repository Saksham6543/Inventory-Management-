package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepo;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private AdminRepo loginRepo;

    public Optional<Admin> findByEmail(String email) {
        return loginRepo.findById(email);
    }

    public Admin save(Admin login) {
        return loginRepo.save(login);
    }

    public boolean authenticate(String email, String password) {
        Optional<Admin> login = findByEmail(email);
        return login.isPresent() && login.get().getPassword().equals(password);
    }

    public boolean updatePassword(String email, String newPassword, String confirmPassword) {
        if (!newPassword.equals(confirmPassword)) {
            // Return false if new password and confirm password do not match
            return false;
        }

        Optional<Admin> loginOpt = findByEmail(email);
        if (loginOpt.isPresent()) {
            Admin login = loginOpt.get();
            login.setPassword(newPassword);
            loginRepo.save(login);
            return true;
        }

        // Return false if user is not found
        return false;
    }
}
