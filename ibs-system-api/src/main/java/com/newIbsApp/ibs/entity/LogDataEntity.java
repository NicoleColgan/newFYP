package com.newIbsApp.ibs.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

//data annotion creates get and set methods
@Entity
@Data
@Table(name="Log_data")
@IdClass(LogDataId.class)
public class LogDataEntity {

    @Id
    @ManyToOne
    @JoinColumn(name="log_id")
    @JsonIgnoreProperties("logDataEntities")
    private LogEntity logEntity;

    @Id
    @Column(name="data")
    private String data;
    @Override
    public String toString() {
        return "LogDataEntity{" +
                "logEntity=" + logEntity.getId() +
                ", data='" + data + '\'' +
                '}';
    }
}
