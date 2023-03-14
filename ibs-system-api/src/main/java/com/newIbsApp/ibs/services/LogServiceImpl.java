package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.entity.LogDataEntity;
import com.newIbsApp.ibs.entity.LogEntity;
import com.newIbsApp.ibs.entity.UserEntity;
import com.newIbsApp.ibs.model.Log;
import com.newIbsApp.ibs.repository.LogDataRepository;
import com.newIbsApp.ibs.repository.LogRepository;
import com.newIbsApp.ibs.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LogServiceImpl implements LogService{
    private LogRepository logRepository;
    private final UserRepository userRepository;
    private final LogDataRepository logDataRepository;

    public LogServiceImpl(LogRepository logRepository,
                          UserRepository userRepository,
                          LogDataRepository logDataRepository){
        this.logRepository=logRepository;
        this.userRepository = userRepository;
        this.logDataRepository = logDataRepository;
    }

    @Override
    public LogEntity createLog(Log log){
        LogEntity logEntity = new LogEntity();

        //copy values in the log object to the Log entity object
        BeanUtils.copyProperties(log, logEntity);

        //set userEntity
        try {
            UserEntity userEntity = userRepository.findById(log.getUserId()).get();
            logEntity.setUserEntity(userEntity);
            System.out.println("-----------------------------------------------");
            System.out.println("User is not null");
            System.out.println("-----------------------------------------------");
        } catch (Exception e){
            System.out.println("-----------------------------------------------");
            System.out.println("User with id " + log.getUserId() + " does not exist in the database");
            System.out.println("-----------------------------------------------");
        }




        //System.out.println("Log entity: "+logEntity);
        //System.out.println("Log: "+log);

        //save to db and save a copy because need to give logDataEntities
        //an id aswel, but the id is auto set so have to get it back from db
        LogEntity savedData = logRepository.save(logEntity);

        for(LogDataEntity logDataEntity: savedData.getLogDataEntities()){
            logDataEntity.setLogEntity(savedData);
        }

        //save logDataEntity objects
        //first check list is not empty otherwise saving will cause an exceptinp
        List<LogDataEntity> logDataEntities = savedData.getLogDataEntities();
        if(!logDataEntities.isEmpty()) {
            savedData.setLogDataEntities(logDataRepository.saveAll(savedData.getLogDataEntities()));
        }

        return logEntity;
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
            if (log.getDate().isEqual(date)){
                userLogsByDate.add(log);
            }
        }
        return userLogsByDate;
    }
}
