package com.newIbsApp.ibs.controller;

import com.newIbsApp.ibs.model.LogData;
import com.newIbsApp.ibs.services.LogDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v3")
public class LogDataController {

    @Autowired
    private final LogDataService logDataService;

    public LogDataController(LogDataService logDataService){
        this.logDataService=logDataService;
    }

    //might need to change to response entity
    @GetMapping("/logDatas")
    public List<LogData> getAllLogData(){
        return logDataService.getAllLogData();
    }

    @PostMapping("/logDatas")
    public LogData createLogData(@RequestBody LogData logData){
        return logDataService.createLogData(logData);
    }

    @GetMapping("logDatas/{id}")
    public ResponseEntity<List<LogData>> getLogDataById(@PathVariable Long id){
        List<LogData> logData = new ArrayList<>();
        logData = logDataService.getLogDataById(id);
        return ResponseEntity.ok(logData);
    }
}
