package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;


import java.util.List;

public interface UserService {
    User createUser(User user);

    List<User> getAllUsers();

    User getUserById(Long id);

    User getUserByEmail(String email);

    User authenticateUser(String email, String password);
}