package com.newIbsApp.ibs.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name="logs")
public class LogEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Many logs can belong to one user
    //UserEntity refernces the pk (id) of the UserEntity
    @ManyToOne
    @JoinColumn(name="users")
    @JsonIgnoreProperties("logs")
    private UserEntity userEntity;

    @Column(name="date")
    private LocalDate date;

    @Column(name="log_type")
    private String logType;

    @OneToMany(mappedBy = "logEntity")
    private List<LogDataEntity> logDataEntities;
}
