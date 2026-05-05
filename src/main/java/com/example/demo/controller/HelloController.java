package com.example.demo.controller;

import com.example.demo.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class HelloController {
    @GetMapping("/hello")
    public List<User> hello() {
        List<User> users = List.of(new User("Nathan", "1234"), new User("Alice", "password"));
        System.out.println(users);
        return users;
    }
}
