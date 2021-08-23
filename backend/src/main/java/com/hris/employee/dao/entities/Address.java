package com.hris.employee.dao.entities;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class Address {

    private int id;

    private int employeeId;

    private String address;
}
