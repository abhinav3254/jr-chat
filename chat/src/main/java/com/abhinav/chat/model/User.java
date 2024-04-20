package com.abhinav.chat.model;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;


@Data @ToString
@Entity
@Table(name = "_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String username;
    private String password;
}
