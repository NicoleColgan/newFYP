package com.newIbsApp.ibs.model;

import com.newIbsApp.ibs.entity.LogEntity;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor //creates a contructor with all arguments
@NoArgsConstructor  //creates a constructor with no args
public class LogData {
    //example for physicalSymptom data would be {"headache", "bloating"}
    //example for trigger foods {"My trigger foods are...")
    private Long logEntity;
    private String data;
}
