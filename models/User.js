'use strict'
// alert("Test User.js");
/**
 * Tạo lớp User
 * Trong lớp User có methor constructor chứa các thông tin cơ bản của User.
 */
class User {
    constructor(firstName, lastName, userName, passWord){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.passWord = passWord;
    }
}

/**
 * Lớp Task 
 */
class Task{
    constructor(task, ower, isDone){
        this.task = task;
        this.ower = ower;
        this.isDone = isDone;
    }
}