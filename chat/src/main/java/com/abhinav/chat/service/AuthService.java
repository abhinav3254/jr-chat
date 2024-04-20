package com.abhinav.chat.service;


import com.abhinav.chat.dto.LogInDTO;
import com.abhinav.chat.jwt.JwtUtils;
import com.abhinav.chat.model.User;
import com.abhinav.chat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

    public ResponseEntity<?> registerUser(User user) {
        try {
            Optional<User> userOptional  = userRepository.findByUsername(user.getUsername());
            if (userOptional.isEmpty()) {
                userRepository.save(user);
                return ResponseEntity.status(200).body("user added");
            } else {
                return ResponseEntity.status(401).body("username already in use");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }

    public ResponseEntity<?> login(LogInDTO logInDTO) {
        try {

            Optional<User> userOptional = userRepository.findByUsername(logInDTO.getUsername());
            if (userOptional.isEmpty()) return ResponseEntity.status(404).body("user not found");
            User user = userOptional.get();
            if (user.getPassword().equals(logInDTO.getPassword())) {
                String token  = jwtUtils.generateToken(user.getUsername(), user.getId(),"user");
                return ResponseEntity.status(200).body(token);
            } else {
                return ResponseEntity.status(401).body("wrong password");
            }

        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getLocalizedMessage());
        }
    }
}
