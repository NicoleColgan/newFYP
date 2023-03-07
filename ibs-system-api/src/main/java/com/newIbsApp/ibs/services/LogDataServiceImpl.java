package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.entity.LogDataEntity;
import com.newIbsApp.ibs.entity.LogEntity;
import com.newIbsApp.ibs.model.Log;
import com.newIbsApp.ibs.model.LogData;
import com.newIbsApp.ibs.repository.LogDataRepository;
import com.newIbsApp.ibs.repository.LogRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LogDataServiceImpl implements LogDataService{
    private LogDataRepository logDataRepository;
    private final LogRepository logRepository;

    public LogDataServiceImpl(LogDataRepository logDataRepository,
                              LogRepository logRepository) {
        this.logDataRepository=logDataRepository;
        this.logRepository = logRepository;
    }
    @Override
    public List<LogData> getLogDataById(Long id) {
        List<LogData> logDatas = getAllLogData();
        List<LogData> toReturn= new ArrayList<>();
        for(LogData l: logDatas){
            if(l.getLogEntity()==id)
                toReturn.add(l);
        }
        return toReturn;
    }

    @Override
    public List<LogData> getAllLogData() {
        List<LogDataEntity> logDataEntities = logDataRepository.findAll();

        List<LogData> logDatas = logDataEntities.stream().map(l -> new LogData(
                l.getLogEntity().getId(),
                l.getData()
        )).collect(Collectors.toList());
        return logDatas;
    }

    @Override
    public LogData createLogData(LogData logData) {
        LogDataEntity logDataEntity = new LogDataEntity();

        //copy valuyes into entity object
        BeanUtils.copyProperties(logData,logDataEntity);
        //System.out.println("LogData entity: "+logDataEntity);
        //System.out.println("LogData: "+logData);

        //set LogEntity in LogDataEntity
        LogEntity logEntity = logRepository.findById(logData.getLogEntity()).orElse(null);
        System.out.println("logEntity");
        logDataEntity.setLogEntity(logEntity);

        //save to db
        logDataRepository.save(logDataEntity);
        return logData;
    }

    //do i need a create logData like i have in create log - yeah because need to save it to db
}
