package com.newIbsApp.ibs.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.newIbsApp.ibs.model.Log;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

/**
 * This is the object we will interact with when were trying to talk to the db
 * This entity works with the jpa to save the entity to the db
 * jpa - Java Persistence Api is a collection of classes and methods to persistently store data into a db
 * Any time we refer to the user entity, were refering to the db entry
 */
@Entity
@Data
@Table(name="users")
public class UserEntity {
    //annotate primary key
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    @OneToMany(mappedBy = "userEntity",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<LogEntity> logs;
    @Override
    public String toString() {
        return "UserEntity{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
