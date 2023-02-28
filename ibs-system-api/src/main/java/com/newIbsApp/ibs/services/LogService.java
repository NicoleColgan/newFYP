package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.model.Log;

import java.time.LocalDate;
import java.util.List;

public interface LogService {
    Log createLog(Log log);

    List<Log> getAllLogs();

    Log getLogById(Long id);

    List<Log> getLogsByUser(Long id);

    List<Log> getLogsByUserAndDate(Long id, LocalDate date);

}
