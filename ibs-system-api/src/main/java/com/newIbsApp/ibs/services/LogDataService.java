package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.model.LogData;

import java.util.List;

public interface LogDataService {
    List<LogData> getLogDataById(Long id);

    List<LogData> getAllLogData();

    LogData createLogData(LogData logData);
}
