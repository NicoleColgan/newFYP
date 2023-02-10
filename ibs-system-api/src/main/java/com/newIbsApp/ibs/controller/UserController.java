package com.newIbsApp.ibs.controller;
import com.newIbsApp.ibs.model.User;
import com.newIbsApp.ibs.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//use Autowired so the userService is automatically injected (creates) when the controller class is called

/*
Rest controllers are a type of controller in web apps that use the REST architectural style.
REST is a popular architectural style for web services, and it defines contraints and best practises for making
scalable, maintainable and flexible APIs

The REST controller handles HTTP requests and returns HTTP responses
This usually involves defining endpoints (URLS) that corrospond to different operations like retrieving data, or updating data

In a webapp, the endpoints would use HTTP methods like GET, POST, PUT, DELETE to do operations
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //define an api which will handle the post reques to save the data
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }


    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = null;
        user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
}
