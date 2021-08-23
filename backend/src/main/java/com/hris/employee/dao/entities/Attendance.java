package com.hris.employee.dao.entities;
import java.sql.Timestamp;
import java.util.*;

public class Attendance
{
    private int employeeId;

    private Date attendanceDate;

    private Timestamp checkInTime;

    //Location -- Check in and check out.

    private Timestamp checkOutTime;
}
