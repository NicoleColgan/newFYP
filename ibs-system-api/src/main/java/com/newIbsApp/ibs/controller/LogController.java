package com.newIbsApp.ibs.controller;

import com.newIbsApp.ibs.entity.LogEntity;
import com.newIbsApp.ibs.model.Log;
import com.newIbsApp.ibs.services.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

//APIs
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v2")
public class LogController {

    @Autowired
    private final LogService logService;

    public LogController(LogService logService){
        this.logService=logService;
    }

    //change to logEntity because need its id for front end
    @PostMapping("/logs")
    public LogEntity createLog(@RequestBody Log log){
        return logService.createLog(log);
    }

    @GetMapping("/logs")
    public List<Log> getAllLogs(){
        return logService.getAllLogs();
    }

    @GetMapping("/logs/{id}")
    public ResponseEntity<Log> getLogById(@PathVariable Long id){
        Log log = new Log();
        log=logService.getLogById(id);
        return ResponseEntity.ok(log);
    }

    @GetMapping("/logs/user/{id}")
    public ResponseEntity<List<Log>> getLogsByUser(@PathVariable Long id){
        List<Log> logs = new ArrayList<>();
        logs=logService.getLogsByUser(id);
        return ResponseEntity.ok(logs);
    }

    @GetMapping("/logs/user/{id}/date/{date}")
    public ResponseEntity<List<Log>> getLogsByUserAndDate(@PathVariable Long id, @PathVariable LocalDate date){
        List<Log> logs = new ArrayList<>();
        logs = logService.getLogsByUserAndDate(id,date);
        return ResponseEntity.ok(logs);
    }

}
