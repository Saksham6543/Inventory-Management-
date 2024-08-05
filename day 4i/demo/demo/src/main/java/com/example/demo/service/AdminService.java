// LoginService.java

package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepo;

import java.util.Optional;

@Service
public class AdminService {

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
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updatePassword'");
    }
}
