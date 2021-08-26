package com.hris.employee.dao.entities;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class Employee {

    private int id;

    private String uniqueId;

    private String name;

    private Gender gender;

    private Date joiningDate;

    private String address;

    private String martialStatus;

    private String race;

    private String religion;

    private String designation;
}
