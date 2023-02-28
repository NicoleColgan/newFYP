package com.newIbsApp.ibs.entity;

import jakarta.persistence.*;

@Entity
@Table(name="LogData")
@IdClass(LogDataId.class)
public class LogDataEntity {

    @Id
    @ManyToOne
    @JoinColumn(name="log_id")
    private LogEntity logEntity;

    @Id
    @Column(name="data")
    private String data;
}
