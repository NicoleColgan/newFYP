package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.model.User;

import java.util.List;


import java.util.List;

public interface UserService {
    User createUser(User user);

    List<User> getAllUsers();

    User getUserById(Long id);

}