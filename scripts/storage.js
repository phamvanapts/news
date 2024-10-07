'use strict'
// alert("Test Storage.js");
/**
 * Lưu giá trị key, value vào localStorage
 * @param {*} key 
 * @param {*} value
 * Lấy giá trị key và value lưu ở dạng JSON
 */
const saveToStorage = function (key, value){
    localStorage.setItem(key, JSON.stringify(value));
};
/**
 * Lấy giá trị key đểgans cho một mảng cần thiết
 * @param {*} key 
 * @returns  trả về JSON bằng hàm parse
 */
const getFromStorage = function(key){
return JSON.parse(localStorage.getItem(key));
};
/**
 * Tạo và gán biến users là mảng lấy từ localStorage hoặc rổng
 */
const users = getFromStorage('userArr')? getFromStorage('userArr') : [];
/**
 * Chuyển đổi về dạng Class Intance
 * Sẽ trả về một mảng chứa các intance của Class User
 */
const userArr = users.map((user)=>parseUser(user));
function parseUser(userData){
    const user = new User(
        userData.firstName,
        userData.lastName,
        userData.userName,
        userData.passWord,
    );
    return user;
}