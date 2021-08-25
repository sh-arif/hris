package com.hris.employee.dao.entities;
import java.sql.Timestamp;
import java.util.*;

public class Attendance
{
    private int employeeId;

    private Date attendanceDate;

    private Timestamp checkInTime;

    private String checkInCoordinates[]=new String[20];

    private String checkOutCoordinates[]=new String[20];

    private Timestamp checkOutTime;
}
