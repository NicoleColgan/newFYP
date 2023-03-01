package com.newIbsApp.ibs.model;

import com.newIbsApp.ibs.entity.LogDataEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

/**
 * User makes a log
 */
@Data
@AllArgsConstructor //creates a contructor with all arguments
@NoArgsConstructor  //creates a constructor with no args
public class Log {

    private Long id;
    private Long userId;
    private LocalDate date;
    //log type can be physicalSymptom, trigger foods, exercise frequency etc.
    private String logType;
    private List<LogDataEntity> logDataEntities;
}
