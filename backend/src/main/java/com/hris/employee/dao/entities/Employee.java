package com.hris.employee.dao.entities;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class Employee {

    private final Object gender;
    private int id;
    private String UniqueID;
    private String name;
    enum gender{ m , f};
    private Date joining_date;
    private String address;
    private String martialstatus;
    private int paidleaves;
    private int sanctioned_leaves;
    private String designation;

    public Employee(int id,String uniqueID,String name,gender gender,Date date,String address,String martialstatus,int paidleaves,int sanctioned_leaves,String designation)
    {
        this.id=id;
        this.UniqueID= uniqueID;
        this.name=name;
        this.gender=gender;
        this.joining_date=date;
        this.address=address;
        this.martialstatus=martialstatus;
        this.paidleaves=paidleaves;
        this.sanctioned_leaves=sanctioned_leaves;
        this.designation=designation;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }
    public void setID(int id)
    {
        this.id=id;
    }
    public int getID()
    {
        return id;
    }
    public void setuniqueID(String uniqueID )
    {
        this.UniqueID = uniqueID;
    }

    public String getUniqueID()
    {
        return UniqueID;
    }public void setMartialStatus(String MartialStatus)
    {
        this.martialstatus = MartialStatus;
    }
    public String getMartialstatus()
    {
        return martialstatus;
    }public void setSanctioned_leaves(int sanctioned_leaves)
    {
        this.sanctioned_leaves = sanctioned_leaves;
    }

    public int getSanctioned_leaves()
    {
        return sanctioned_leaves;
    }
    public void setPaidleaves(int paidleaves)
    {
        this.paidleaves = paidleaves;
    }

    public int getPaidleaves()
    {
        return paidleaves;
    }public void setDesignation(String designation)
    {
        this.designation=designation;
    }

    public String getDesignation()
    {
        return designation;
    }
    public void setAddress(String Address)
    {
        this.address=Address;

    }
    public String getAddress()
    {
        return this.address;
    }
    public void setJoining_date(Date joining_date)
    {
        this.joining_date=joining_date;
    }





}