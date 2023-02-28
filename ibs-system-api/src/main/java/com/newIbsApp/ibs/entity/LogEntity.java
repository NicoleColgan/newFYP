package com.newIbsApp.ibs.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name="Log")
public class LogEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Many logs can belong to one user
    //UserEntity refernces the pk (id) of the UserEntity
    @ManyToOne
    @JoinColumn(name="users")
    private UserEntity userEntity;

    @Column(name="logType")
    private String logType;

    @Column(name="date")
    private LocalDate date;
}
