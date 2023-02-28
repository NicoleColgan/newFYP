package com.newIbsApp.ibs.services;

import com.newIbsApp.ibs.model.LogData;

import java.util.List;

public interface LogDataService {
    List<String> getLogDataById(Long id);
}
