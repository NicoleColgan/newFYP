package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.entity.LogEntity;
import com.newIbsApp.ibs.model.Log;
import com.newIbsApp.ibs.repository.LogRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LogServiceImpl implements LogService{
    private LogRepository logRepository;

    public LogServiceImpl(LogRepository logRepository){
        this.logRepository=logRepository;
    }

    @Override
    public Log createLog(Log log){
        LogEntity logEntity = new LogEntity();

        //copy values in the log object to the Log entity object
        BeanUtils.copyProperties(log, logEntity);
        System.out.println("Log entity: "+logEntity);
        System.out.println("Log: "+log);

        //save to db
        logRepository.save(logEntity);
        return log;
    }

    @Override
    public List<Log> getAllLogs() {
        List<LogEntity> logEntities = logRepository.findAll();

        List<Log> logs = logEntities.stream().map(l -> new Log(
                l.getId(),
                l.getUserEntity().getId(),
                l.getDate(),
                l.getLogType(),
                l.getLogDataEntities()
        )).collect(Collectors.toList());

        return logs;
    }

    @Override
    public Log getLogById(Long id) {
        LogEntity logEntity = logRepository.findById(id).get();
        Log log = new Log();
        BeanUtils.copyProperties(logEntity,log);
        return log;
    }

    @Override
    public List<Log> getLogsByUser(Long id) {
        List<Log> logs = getAllLogs();
        List<Log> userLogs = new ArrayList<>();
        for(Log log: logs){
            if(log.getUserId()==id)
                userLogs.add(log);
        }
        return userLogs;
    }

    @Override
    public List<Log> getLogsByUserAndDate(Long id, LocalDate date) {
        List<Log> userLogs = getLogsByUser(id);
        List<Log> userLogsByDate = new ArrayList<>();
        for(Log log: userLogs){
            if (log.getDate()==date){
                userLogsByDate.add(log);
            }
        }
        return userLogsByDate;
    }
}
