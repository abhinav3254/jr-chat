package com.abhinav.chat.controller;


import com.abhinav.chat.dto.LogInDTO;
import com.abhinav.chat.model.User;
import com.abhinav.chat.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("auth")
@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        return authService.registerUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LogInDTO logInDTO) {
        return authService.login(logInDTO);
    }

}
