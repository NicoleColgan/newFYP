package com.newIbsApp.ibs.entity;

import java.io.Serializable;

//needs to impelemtn Serializable because we have a composite pk
public class LogDataId implements Serializable {
    private Long logId;
    private String data;
}
